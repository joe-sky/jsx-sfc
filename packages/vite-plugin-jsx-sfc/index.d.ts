/*!
 * vite-plugin-jsx-sfc v1.7.0
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import { Plugin } from 'vite';
import { ParserOptions } from '@babel/core';

interface Options {
    parserPlugins?: ParserOptions['plugins'];
    transformJsx?: boolean;
}
declare function jsxSfcPlugin(opts?: Options): Plugin;

export default jsxSfcPlugin;
export type { Options };
