import { transformSync } from '@babel/core';
import { format } from 'prettier';
import presetTypescript from '@babel/preset-typescript';
import babelPluginJsxSfc from '../src/index';

export function transform(code: string) {
  const result = transformSync(code, {
    retainLines: true,
    presets: [[presetTypescript, { allExtensions: true, isTSX: true }]],
    plugins: [babelPluginJsxSfc]
  });

  if (result?.code == null) {
    return code;
  }

  return format(result.code, {
    parser: 'babel',
    printWidth: 120,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    jsxBracketSameLine: true,
    useTabs: false,
    trailingComma: 'none'
  });
}
