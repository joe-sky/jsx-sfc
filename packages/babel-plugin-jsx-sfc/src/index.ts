import traverse, { Visitor, NodePath } from '@babel/traverse';
import * as types from '@babel/types';
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
        CallExpression: {
          enter(path) {
            if (types.isIdentifier(path.node.callee) && path.node.callee.name === 'sfc') {
              const sfcArguments = path.node.arguments as types.ObjectExpression[];
              if (types.isObjectExpression(sfcArguments?.[0])) {
                const ComponentProp = sfcArguments[0].properties.find(
                  prop => types.isObjectProperty(prop) && types.isIdentifier(prop.key) && prop.key.name === 'Component'
                ) as types.ObjectProperty;

                if (!ComponentProp) {
                  return;
                }
                sfcArguments[0].properties.splice(sfcArguments[0].properties.indexOf(ComponentProp), 1);

                path.replaceWith(
                  types.callExpression(types.identifier('sfc'), [
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
