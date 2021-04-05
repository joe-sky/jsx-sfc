import { addDefault, addNamed } from '@babel/helper-module-imports';
import traverse, { NodePath } from '@babel/traverse';
import { Identifier } from '@babel/types';
import { createMacro, MacroParams } from 'babel-plugin-macros';
import babelPlugin from 'babel-plugin-jsx-sfc';

function jsxSfcMacro({
  references,
  state,
  babel: { types: t },
  config: { importModuleName = 'jsx-sfc', ...config } = {}
}: MacroParams) {
  const program = state.file.path;

  // FIRST STEP : replace `jsx-sfc.macro` by `jsx-sfc
  // references looks like this
  // { default: [path, path], css: [path], ... }
  let customImportName;
  Object.keys(references).forEach(refName => {
    // generate new identifier
    let id: Identifier;
    if (refName === 'default') {
      id = addDefault(program, importModuleName, { nameHint: 'sfc' });
      customImportName = id;
    } else {
      id = addNamed(program, refName, importModuleName, { nameHint: refName });
    }

    // update references with the new identifiers
    references[refName].forEach(referencePath => {
      // eslint-disable-next-line no-param-reassign
      (referencePath as NodePath<Identifier>).node.name = id.name;
    });
  });

  // SECOND STEP : apply babel-plugin-jsx-sfc to the file
  const stateWithOpts = {
    ...state,
    opts: {
      ...config,
      topLevelImportPaths: (config.topLevelImportPaths || []).concat(importModuleName)
    },
    customImportName
  };
  traverse(program.parent, babelPlugin().visitor, undefined, stateWithOpts);
}

export default createMacro(jsxSfcMacro, {
  configName: 'jsxSfc'
});
