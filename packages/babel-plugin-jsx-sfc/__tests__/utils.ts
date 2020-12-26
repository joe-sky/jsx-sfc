import { transformSync } from '@babel/core';
import presetTypescript from '@babel/preset-typescript';
import presetReact from '@babel/preset-react';
import babelPluginJsxSfc from '../src/index';

export function transform(code: string) {
  return transformSync(code, {
    retainLines: true,
    presets: [[presetTypescript, { allExtensions: true, isTSX: true }], presetReact],
    plugins: [babelPluginJsxSfc]
  }).code;
}
