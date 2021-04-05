import * as types from '@babel/types';
import { CallExpression, Identifier } from '@babel/types';
import { NodePath } from '@babel/traverse';
import { SFC_LIB, SFC_FUNC } from './index';

export function isImportedByLib(
  identifier: string,
  path: NodePath<CallExpression>,
  libName: string | string[] = [SFC_LIB]
) {
  if (!Array.isArray(libName)) {
    libName = [libName];
    libName.push(SFC_LIB);
  }

  const bindingPath = path.scope.getBinding(identifier)?.path;
  if (types.isImportDeclaration(bindingPath?.parent)) {
    const sourceValue = bindingPath?.parent.source.value;
    return sourceValue != null ? libName.includes(sourceValue) : false;
  }
}

export function isCalleeImportedBySfc(
  callee: CallExpression['callee'],
  path: NodePath<CallExpression>,
  libName?: string | string[],
  customImportName?: Identifier
) {
  if (types.isIdentifier(callee)) {
    return (
      callee.name === (customImportName ? customImportName.name : SFC_FUNC) &&
      (customImportName || isImportedByLib(callee.name, path, libName))
    );
  } else if (types.isMemberExpression(callee)) {
    return (
      types.isIdentifier(callee.object) &&
      callee.object.name === (customImportName ? customImportName.name : SFC_FUNC) &&
      (customImportName || isImportedByLib(callee.object.name, path, libName))
    );
  }
}
