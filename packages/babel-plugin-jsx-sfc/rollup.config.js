import dts from 'rollup-plugin-dts';
import license from 'rollup-plugin-license';

const config = {
  input: './src/index.ts',
  output: { format: 'es' },
  plugins: [dts()]
};

config.plugins.push(
  license({
    banner: `/*!
 * babel-plugin-jsx-sfc v${require('../../package.json').version}
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */`
  })
);

export default config;
