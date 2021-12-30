import { Plugin } from 'vite';
import { transformSync, ParserOptions } from '@babel/core';
import babelPluginJsxSfc from 'babel-plugin-jsx-sfc';
import babelPluginTransformReactJsx from '@babel/plugin-transform-react-jsx';

export interface Options {
  parserPlugins?: ParserOptions['plugins'];
  transformJsx?: boolean;
}

export default function jsxSfcPlugin(opts?: Options) {
  if (!opts) {
    opts = {};
  }
  if (opts.transformJsx == null) {
    opts.transformJsx = true;
  }

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

      const parserPlugins: ParserOptions['plugins'] = [
        'jsx',
        'importMeta',
        // since the plugin now applies before esbuild transforms the code,
        // we need to enable some stage 3 syntax since they are supported in
        // TS and some environments already.
        'topLevelAwait',
        'classProperties',
        'classPrivateProperties',
        'classPrivateMethods'
      ];
      if (/\.tsx?$/.test(id)) {
        // it's a typescript file
        // TODO: maybe we need to read tsconfig to determine parser plugins to
        // enable here, but allowing decorators by default since it's very
        // commonly used with TS.
        parserPlugins.push('typescript', 'decorators-legacy');
      }
      if (opts?.parserPlugins) {
        parserPlugins.push(...opts.parserPlugins);
      }

      const result = transformSync(code, {
        configFile: false,
        filename: id,
        parserOpts: {
          sourceType: 'module',
          allowAwaitOutsideFunction: true,
          plugins: parserPlugins
        },
        plugins: opts?.transformJsx ? [babelPluginTransformReactJsx, babelPluginJsxSfc] : [babelPluginJsxSfc],
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
