import { transformSync } from '@babel/core';
import babelPluginJsxSfc from 'babel-plugin-jsx-sfc';

interface Args {
  code: string;
  path: string;
}

export const sfcTransform = {
  test: ({ path }: Args) => {
    if (!/\.(t|j)sx?$/.test(path)) {
      return false;
    }
    if (isDependency(path) && !path.endsWith('x')) {
      // do not transform if this is a dep and is not jsx/tsx
      return false;
    }
    return true;
  },

  transform: ({ code, path }: Args) => {
    const result = transformSync(code, {
      plugins: [babelPluginJsxSfc],
      sourceMaps: true,
      sourceFileName: path
    });

    if (result?.code == null || !/\$sfcFuncResults/.test(result.code)) {
      // no component detected in the file
      return code;
    }

    return {
      code: result.code,
      map: result.map
    };
  }
};

function isDependency(path: string) {
  return path.startsWith(`/@modules/`) || path.includes('node_modules');
}
