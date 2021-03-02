import { Plugin } from 'vite';
import { transformSync } from '@babel/core';
import babelPluginJsxSfc from 'babel-plugin-jsx-sfc';
import babelPluginTransformReactJsx from '@babel/plugin-transform-react-jsx';

export interface Options {}

export default function jsxSfcPlugin(opts?: Options) {
  return {
    name: 'jsx-sfc',

    enforce: 'pre',

    transform(code, id) {
      if (!/\.(t|j)sx?$/.test(id) || id.includes('node_modules')) {
        return;
      }

      // plain js/ts files can't use jsx-sfc without importing it, so skip
      // them whenever possible
      if (!id.endsWith('x') && !code.includes('jsx-sfc')) {
        return;
      }

      const result = transformSync(code, {
        configFile: false,
        filename: id,
        plugins: [babelPluginTransformReactJsx, babelPluginJsxSfc],
        sourceMaps: true,
        sourceFileName: id
      });

      if (result?.code == null || !/\$sfcOptions/.test(result.code)) {
        // no component detected in the file
        return code;
      }

      return {
        code: result.code,
        map: result.map
      };
    }
  } as Plugin;
}
