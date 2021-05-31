import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';
import license from 'rollup-plugin-license';
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const env = process.env.NODE_ENV;
const type = process.env.TYPE;
let config = {
  input: './src/index.ts',
  external: ['react'],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: ['node_modules']
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ]
};

if (type !== 'dts') {
  config = {
    ...config,
    output: { name: 'JsxSFC' }
  };
  config.plugins.push(
    esbuild({
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: false, // default
      minify: process.env.NODE_ENV === 'production',
      target: 'es2017', // default, or 'es20XX', 'esnext'
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"'
      },
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
        // Enable JSX in .js files too
        '.js': 'jsx'
      }
    })
  );

  if (env === 'cjs' || env === 'es') {
    config.output.format = env;
  }

  if (env === 'development' || env === 'production') {
    config.output.format = 'umd';
    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    );
  }

  config.plugins.push(filesize());

  if (env === 'cjs' || env === 'es') {
    config.plugins.push(
      copy({
        targets: [
          {
            src: 'types/dist.definition.ts',
            dest: 'dist',
            rename: `${env === 'cjs' ? 'jsx-sfc.common' : 'jsx-sfc.esm'}.d.ts`
          }
        ]
      })
    );
  }
} else {
  config = {
    ...config,
    output: { format: 'es' }
  };
  config.plugins.push(dts());
}

config.plugins.push(
  license({
    banner: `/*!
 * jsx-sfc v${require('../../package.json').version}
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */`
  })
);

export default config;
