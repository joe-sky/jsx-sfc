import { transformSync } from '@babel/core';
import traverse from '@babel/traverse';
import * as types from '@babel/types';
import { babelConfig } from './config';
import { SFCBlock, Descriptor } from '../types';
import { astUtils, utils } from 'babel-plugin-jsx-sfc';

const { SFC_FORWARD_REF, SFC_COMPONENT, SFC_TEMPLATE, SFC_STYLES, SFC_OPTIONS } = utils;

export function parse(code: string) {
  const ast = transformSync(code, babelConfig)?.ast;
  const descriptor: Descriptor = {
    component: [],
    template: [],
    styles: [],
    options: []
  };

  traverse(ast, {
    CallExpression: {
      enter(path) {
        const { callee } = path.node;

        let sfcType: 0 | 1 | 2 | 3 | 4 = 0;
        if (types.isCallExpression(callee) && astUtils.isCalleeImportedBySfc(callee.callee, path)) {
          if (
            types.isMemberExpression(callee.callee) &&
            types.isIdentifier(callee.callee.property) &&
            callee.callee.property.name === SFC_FORWARD_REF
          ) {
            sfcType = 3;
          } else {
            sfcType = 1;
          }
        } else if (astUtils.isCalleeImportedBySfc(callee, path)) {
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
            sfcArguments[0].properties.forEach(prop => {
              if (types.isObjectMethod(prop) || types.isObjectProperty(prop)) {
                if (types.isIdentifier(prop.key)) {
                  const block: SFCBlock = {
                    locStartOffset: prop.start || 0,
                    locEndOffset: prop.end || 0
                  };

                  switch (prop.key.name) {
                    case SFC_COMPONENT:
                      descriptor.component.push(block);
                      break;
                    case SFC_TEMPLATE:
                      descriptor.template.push(block);
                      break;
                    case SFC_STYLES:
                      descriptor.styles.push(block);
                      break;
                    case SFC_OPTIONS:
                      descriptor.options.push(block);
                      break;
                  }
                }
              }
            });
          }
        }
      }
    }
  });

  return descriptor;
}
