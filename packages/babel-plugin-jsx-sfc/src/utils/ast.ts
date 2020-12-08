import * as types from '@babel/types';
import { JSXElement, JSXIdentifier, JSXAttribute, JSXExpressionContainer, Node } from '@babel/types';
import { NodePath } from '@babel/traverse';

const LIB_NAME = 'jsx-sfc';

export function isImportedByLib(
  identifier: string,
  path: NodePath<JSXElement>,
  libName: string | string[] = [LIB_NAME]
) {
  if (!Array.isArray(libName)) {
    libName = [libName];
    libName.push(LIB_NAME);
  }

  const bindingPath = path.scope.getBinding(identifier)?.path;
  if (types.isImportDeclaration(bindingPath?.parent)) {
    return libName.includes(bindingPath.parent.source.value);
  }
}
