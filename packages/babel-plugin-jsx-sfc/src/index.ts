import traverse, { Visitor, NodePath } from '@babel/traverse';
import * as types from '@babel/types';
import { SFC_FUNC, SFC_COMPONENT, getOptionsName, getSfcName, SFC_CREATE_OPTIONS, SFC_FORWARD_REF } from './utils';
import * as astUtil from './utils/ast';
// import generate from '@babel/generator';

interface State {
  opts?: {
    importedLib?: string[];
  };
}

export default () => ({
  name: 'babel-plugin-jsx-sfc',
  visitor: {
    Program(_path, state: State) {
      traverse(_path.node, {
        /*
          const App = sfc(
            {
              template({ data }) {
                ...
              },
          
              Component: (props) => {
                ...
              },
          
              styles: () => { ... }
            },
            () => ({
              utils: { ... }
            })
          );

          ↓ ↓ ↓ ↓ ↓ ↓

          const $sfcOptions_lineNo = sfc.createOptions(
            {
              template({ data }) {
                ...
              },
          
              styles: () => ({
                ...
              })
            },
            () => ({
              utils: { ... }
            })
          );

          const Sfc_lineNo = (props) => {
            ...
            return $sfcOptions_lineNo.template({ ... });
          };

          const App = sfc(Sfc_lineNo, $sfcOptions_lineNo);
        */
        CallExpression: {
          enter(path) {
            const { callee } = path.node;
            const importedLib = state?.opts?.importedLib;

            /**
             * 0: nothing
             * 1: const App = sfc()({ ... })
             * 2: const App = sfc({ ... })
             * 3: const App = sfc.forwardRef()({ ... })
             * 4: const App = sfc.forwardRef({ ... })
             */
            let sfcType: 0 | 1 | 2 | 3 | 4 = 0;
            if (types.isCallExpression(callee) && astUtil.isCalleeImportedBySfc(callee.callee, path, importedLib)) {
              if (
                types.isMemberExpression(callee.callee) &&
                types.isIdentifier(callee.callee.property) &&
                callee.callee.property.name === SFC_FORWARD_REF
              ) {
                sfcType = 3;
              } else {
                sfcType = 1;
              }
            } else if (astUtil.isCalleeImportedBySfc(callee, path, importedLib)) {
              if (
                types.isMemberExpression(callee) &&
                types.isIdentifier(callee.property) &&
                callee.property.name === SFC_FORWARD_REF
              ) {
                sfcType = 4;
              } else {
                sfcType = 2;
              }
            }

            if (sfcType) {
              const sfcArguments = path.node.arguments as types.ObjectExpression[];
              if (types.isObjectExpression(sfcArguments?.[0])) {
                const ComponentProp = sfcArguments[0].properties.find(
                  prop =>
                    types.isObjectProperty(prop) && types.isIdentifier(prop.key) && prop.key.name === SFC_COMPONENT
                ) as types.ObjectProperty;

                if (!ComponentProp) {
                  return;
                }

                const indexInProps = sfcArguments[0].properties.indexOf(ComponentProp);
                const lineNo = path?.node?.loc?.start.line;
                const sfcOptionsName = getOptionsName(lineNo);

                // todo: has template?

                /*
                  Component: props => {
                    return { firstName: 'joe' };
                  }

                  ↓ ↓ ↓ ↓ ↓ ↓ 

                  Component: props => {
                    return $sfcOptions_lineNo.template({ firstName: 'joe' });
                  }
                */
                const componentFuncPath = path.get(`arguments.0.properties.${indexInProps}.value`) as NodePath<
                  types.ArrowFunctionExpression
                >;
                const funcBlockPath = componentFuncPath.get('body') as NodePath<types.BlockStatement>;
                const returnArgPath = componentFuncPath.get('body.body').find(p => p.isReturnStatement()) as NodePath<
                  types.ReturnStatement
                >;

                const firstPropParamPath = componentFuncPath.get('params.0') as NodePath<
                  types.Identifier | types.ObjectPattern
                >;
                if (firstPropParamPath) {
                  if (types.isObjectPattern(firstPropParamPath.node)) {
                    // const { styles } = { ...props, ...$sfcOptions_lineNo };
                    const propsName = 'props';

                    funcBlockPath.unshiftContainer(
                      'body',
                      types.variableDeclaration('const', [
                        types.variableDeclarator(
                          firstPropParamPath.node,
                          types.objectExpression([
                            types.spreadElement(types.identifier(propsName)),
                            types.spreadElement(types.identifier(sfcOptionsName))
                          ])
                        )
                      ])
                    );

                    firstPropParamPath.replaceWith(types.identifier(propsName));
                  } else {
                    // props = { ...props, ...$sfcOptions_lineNo };
                    const propsName = (firstPropParamPath.node as types.Identifier).name;

                    funcBlockPath.unshiftContainer(
                      'body',
                      types.expressionStatement(
                        types.assignmentExpression(
                          '=',
                          types.identifier(propsName),
                          types.objectExpression([
                            types.spreadElement(types.identifier(propsName)),
                            types.spreadElement(types.identifier(sfcOptionsName))
                          ])
                        )
                      )
                    );
                  }
                }

                // return $sfcOptions_lineNo.template({ ... });
                if (types.isObjectExpression(returnArgPath.node.argument)) {
                  returnArgPath.replaceWith(
                    types.returnStatement(
                      types.callExpression(
                        types.memberExpression(types.identifier(sfcOptionsName), types.identifier('template')),
                        [returnArgPath.node.argument]
                      )
                    )
                  );
                }

                sfcArguments[0].properties.splice(indexInProps, 1);

                // const $sfcOptions_lineNo = ...
                const componentVariable = path.findParent(
                  path =>
                    path.isVariableDeclaration() || path.isExportDefaultDeclaration() || path.isExportDeclaration()
                );

                const sfcOptionsPath = componentVariable?.insertBefore(
                  types.variableDeclaration('const', [
                    types.variableDeclarator(
                      types.identifier(sfcOptionsName),
                      types.callExpression(
                        types.memberExpression(types.identifier(SFC_FUNC), types.identifier(SFC_CREATE_OPTIONS)),
                        sfcArguments
                      )
                    )
                  ])
                );

                if (sfcType <= 2) {
                  const sfcName = getSfcName(lineNo);

                  componentVariable?.insertBefore(
                    types.variableDeclaration('const', [
                      types.variableDeclarator(
                        types.identifier(sfcName),
                        ComponentProp.value as types.ArrowFunctionExpression
                      )
                    ])
                  );

                  path.replaceWith(
                    types.callExpression(types.identifier(SFC_FUNC), [
                      types.identifier(sfcName),
                      types.identifier(sfcOptionsName)
                    ])
                  );
                } else {
                  path.replaceWith(
                    types.callExpression(
                      types.memberExpression(types.identifier(SFC_FUNC), types.identifier(SFC_FORWARD_REF)),
                      [ComponentProp.value as types.ArrowFunctionExpression, types.identifier(sfcOptionsName)]
                    )
                  );
                }

                // console.log(generate(path.node).code);
                // console.log(generate(sfcOptionsPath[0].node).code);
              }
            }
          }
        }
      });
    }
  } as Visitor
});
