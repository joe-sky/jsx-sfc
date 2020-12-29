import { transformSync } from '@babel/core';
import { format } from 'prettier';
import presetTypescript from '@babel/preset-typescript';
import babelPluginJsxSfc from '../src/index';

export function transform(code: string) {
  return format(
    transformSync(code, {
      retainLines: true,
      presets: [[presetTypescript, { allExtensions: true, isTSX: true }]],
      plugins: [babelPluginJsxSfc]
    }).code,
    {
      parser: 'babel',
      printWidth: 120,
      tabWidth: 2,
      singleQuote: true,
      semi: true,
      jsxBracketSameLine: true,
      useTabs: false,
      trailingComma: 'none'
    }
  );
}
