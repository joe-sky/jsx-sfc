import traverse, { Visitor, NodePath } from '@babel/traverse';
import * as types from '@babel/types';
import { SFC_FUNC, SFC_COMPONENT } from './utils';
import * as astUtil from './utils/ast';

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
          
              style: () => ({
                ...
              })
            },
            {
              ...
            }
          );

          ↓ ↓ ↓ ↓ ↓ ↓ 

          const App = sfc((props) => { ... }, [
            {
              template({ data }) {
                ...
              },
          
              style: () => ({
                ...
              })
            },
            {
              ...
            }
          ]);
        */
        CallExpression: {
          enter(path) {
            const { callee } = path.node;
            const importedLib = state?.opts?.importedLib;

            /**
             * 0: nothing
             * 1: const App = sfc()({ ... })
             * 2: const App = sfc({ ... })
             */
            let sfcType: 0 | 1 | 2 = 0;
            if (types.isCallExpression(callee) && astUtil.isCalleeImportedBySfc(callee.callee, path, importedLib)) {
              sfcType++;
            } else if (astUtil.isCalleeImportedBySfc(callee, path, importedLib)) {
              sfcType++;
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

                // todo: has template?

                /*
                  {
                    Component: props => {
                      return { firstName: 'joe' };
                    }
                  }

                  ↓ ↓ ↓ ↓ ↓ ↓ 

                  {
                    Component: props => {
                      return props.template({ firstName: 'joe' });
                    }
                  }
                */
                const componentFuncPath = path.get(`arguments.0.properties.${indexInProps}.value`) as NodePath<
                  types.ArrowFunctionExpression
                >;
                const propsParamPath = componentFuncPath.get('params.0') as NodePath<
                  types.Identifier | types.ObjectPattern
                >;
                const funcBodyPath = componentFuncPath.get('body.body') as NodePath<types.Node>[];
                const returnArgPath = funcBodyPath.find(p => p.isReturnStatement()) as NodePath<types.ReturnStatement>;

                if (types.isObjectExpression(returnArgPath.node.argument)) {
                  returnArgPath.replaceWith(
                    types.returnStatement(
                      types.callExpression(
                        types.memberExpression(
                          types.identifier((propsParamPath.node as types.Identifier).name),
                          types.identifier('template')
                        ),
                        [returnArgPath.node.argument]
                      )
                    )
                  );
                }

                sfcArguments[0].properties.splice(indexInProps, 1);

                path.replaceWith(
                  types.callExpression(types.identifier(SFC_FUNC), [
                    ComponentProp.value as types.ArrowFunctionExpression,
                    types.arrayExpression(sfcArguments)
                  ])
                );
              }
            }
          }
        }
      });
    }
  } as Visitor
});
