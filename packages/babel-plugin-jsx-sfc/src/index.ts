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

            if (
              (types.isCallExpression(callee) && astUtil.isCalleeImportedBySfc(callee.callee, path, importedLib)) ||
              astUtil.isCalleeImportedBySfc(callee, path, importedLib)
            ) {
              const sfcArguments = path.node.arguments as types.ObjectExpression[];
              if (types.isObjectExpression(sfcArguments?.[0])) {
                const ComponentProp = sfcArguments[0].properties.find(
                  prop =>
                    types.isObjectProperty(prop) && types.isIdentifier(prop.key) && prop.key.name === SFC_COMPONENT
                ) as types.ObjectProperty;

                if (!ComponentProp) {
                  return;
                }
                sfcArguments[0].properties.splice(sfcArguments[0].properties.indexOf(ComponentProp), 1);

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
