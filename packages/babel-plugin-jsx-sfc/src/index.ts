import { Visitor, NodePath } from '@babel/traverse';
import * as types from '@babel/types';
import {
  SFC_FUNC,
  SFC_COMPONENT,
  SFC_TEMPLATE,
  getOptionsName,
  getSfcName,
  SFC_CREATE_OPTIONS,
  SFC_FORWARD_REF
} from './utils';
import * as astUtils from './utils/ast';
import * as utils from './utils';
// import generate from '@babel/generator';

export interface State {
  opts?: {
    importedLib?: string[];
  };
  customImportName?: types.Identifier;
}

export default () => ({
  name: 'babel-plugin-jsx-sfc',
  visitor: {
    Program(_path, state: State) {
      _path.traverse({
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
            if (
              types.isCallExpression(callee) &&
              astUtils.isCalleeImportedBySfc(callee.callee, path, importedLib, state?.customImportName)
            ) {
              if (
                types.isMemberExpression(callee.callee) &&
                types.isIdentifier(callee.callee.property) &&
                callee.callee.property.name === SFC_FORWARD_REF
              ) {
                sfcType = 3;
              } else {
                sfcType = 1;
              }
            } else if (astUtils.isCalleeImportedBySfc(callee, path, importedLib, state?.customImportName)) {
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
                const componentProp = sfcArguments[0].properties.find(
                  prop =>
                    types.isObjectProperty(prop) && types.isIdentifier(prop.key) && prop.key.name === SFC_COMPONENT
                ) as types.ObjectProperty;
                const componentMethod = sfcArguments[0].properties.find(
                  prop => types.isObjectMethod(prop) && types.isIdentifier(prop.key) && prop.key.name === SFC_COMPONENT
                ) as types.ObjectMethod;

                if (!componentProp && !componentMethod) {
                  return;
                }

                const indexInProps = sfcArguments[0].properties.indexOf(
                  componentProp ? componentProp : componentMethod
                );
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
                let componentFuncPath: NodePath<types.ArrowFunctionExpression> | NodePath<types.ObjectMethod>;
                if (componentProp) {
                  componentFuncPath = path.get(`arguments.0.properties.${indexInProps}.value`) as NodePath<
                    types.ArrowFunctionExpression
                  >;
                } else {
                  componentFuncPath = path.get(`arguments.0.properties.${indexInProps}`) as NodePath<
                    types.ObjectMethod
                  >;
                }

                const funcBlockPath = componentFuncPath.get('body') as NodePath<types.BlockStatement>;
                const firstPropParamPath = componentFuncPath.get('params.0') as NodePath<
                  types.Identifier | types.ObjectPattern
                >;

                let propsName = '__props';
                if (firstPropParamPath) {
                  if (types.isObjectPattern(firstPropParamPath.node)) {
                    // const { styles, props } = { ...__props, ...$sfcOptions_lineNo, props: __props, originalProps(deprecated): __props };
                    funcBlockPath.unshiftContainer(
                      'body',
                      types.variableDeclaration('const', [
                        types.variableDeclarator(
                          firstPropParamPath.node,
                          types.objectExpression([
                            types.spreadElement(types.identifier(propsName)),
                            types.spreadElement(types.identifier(sfcOptionsName)),
                            types.objectProperty(types.identifier('props'), types.identifier(propsName)),
                            types.objectProperty(types.identifier('originalProps'), types.identifier(propsName))
                          ])
                        )
                      ])
                    );

                    firstPropParamPath.replaceWith(types.identifier(propsName));
                  } else {
                    // props = { ...props, ...$sfcOptions_lineNo };
                    propsName = (firstPropParamPath.node as types.Identifier).name;

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
                } else {
                  if (types.isObjectMethod(componentFuncPath.node)) {
                    componentFuncPath.replaceWith(
                      types.objectMethod(
                        'method',
                        types.identifier(SFC_COMPONENT),
                        [types.identifier(propsName)],
                        funcBlockPath.node
                      )
                    );
                  } else {
                    componentFuncPath.replaceWith(
                      types.arrowFunctionExpression([types.identifier(propsName)], funcBlockPath.node)
                    );
                  }
                }

                const returnArgPath = componentFuncPath.get('body.body').find(p => p.isReturnStatement()) as NodePath<
                  types.ReturnStatement
                >;

                // return $sfcOptions_lineNo.template({ ... });
                let existProps: types.ObjectProperty | null = null;
                if (types.isObjectExpression(returnArgPath.node.argument)) {
                  returnArgPath.replaceWith(
                    types.returnStatement(
                      types.callExpression(
                        types.memberExpression(types.identifier(sfcOptionsName), types.identifier(SFC_TEMPLATE)),
                        [
                          types.objectExpression([
                            ...returnArgPath.node.argument.properties.filter(property => {
                              if (
                                types.isObjectProperty(property) &&
                                types.isIdentifier(property.key) &&
                                property.key.name === 'props'
                              ) {
                                existProps = property;
                                return false;
                              }
                              return true;
                            }),
                            existProps || types.objectProperty(types.identifier('props'), types.identifier(propsName))
                          ])
                        ]
                      )
                    )
                  );
                }

                sfcArguments[0].properties.splice(indexInProps, 1);

                // const $sfcOptions_lineNo = ...
                const componentVariable = path.findParent(
                  path => path.isVariableDeclaration() || path.isExportDefaultDeclaration()
                );

                const importName = state?.customImportName?.name || SFC_FUNC;

                const sfcOptionsPath = componentVariable?.insertBefore(
                  types.variableDeclaration('const', [
                    types.variableDeclarator(
                      types.identifier(sfcOptionsName),
                      types.callExpression(
                        types.memberExpression(types.identifier(importName), types.identifier(SFC_CREATE_OPTIONS)),
                        sfcArguments
                      )
                    )
                  ])
                );

                let actualComponentFunc: types.ArrowFunctionExpression;
                if (types.isArrowFunctionExpression(componentFuncPath.node)) {
                  actualComponentFunc = componentFuncPath.node;
                } else {
                  actualComponentFunc = types.arrowFunctionExpression(
                    componentFuncPath.node.params,
                    componentFuncPath.node.body
                  );
                }

                if (sfcType <= 2) {
                  const sfcName = getSfcName(lineNo);

                  componentVariable?.insertBefore(
                    types.variableDeclaration('const', [
                      types.variableDeclarator(types.identifier(sfcName), actualComponentFunc)
                    ])
                  );

                  if (types.isVariableDeclaration(componentVariable?.node)) {
                    const declarationId = componentVariable?.node.declarations?.[0]?.id;
                    if (types.isIdentifier(declarationId)) {
                      const componentName = declarationId.name;
                      componentVariable?.insertBefore(
                        types.expressionStatement(
                          types.assignmentExpression(
                            '=',
                            types.memberExpression(types.identifier(sfcName), types.identifier('displayName')),
                            types.stringLiteral(componentName)
                          )
                        )
                      );
                    }
                  }

                  path.replaceWith(
                    types.callExpression(types.identifier(importName), [
                      types.identifier(sfcName),
                      types.identifier(sfcOptionsName)
                    ])
                  );
                } else {
                  path.replaceWith(
                    types.callExpression(
                      types.memberExpression(types.identifier(importName), types.identifier(SFC_FORWARD_REF)),
                      [actualComponentFunc, types.identifier(sfcOptionsName)]
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

export { astUtils, utils };
