import presetTypescript from '@babel/preset-typescript';
import pluginSyntaxImportMeta from '@babel/plugin-syntax-import-meta';
import pluginProposalJsonStrings from '@babel/plugin-proposal-json-strings';
import pluginProposalOptionalChaining from '@babel/plugin-proposal-optional-chaining';
import pluginSyntaxDecorators from '@babel/plugin-syntax-decorators';
import pluginSyntaxDynamicImport from '@babel/plugin-syntax-dynamic-import';

export const babelConfig = {
  ast: true,
  presets: [[presetTypescript, { allExtensions: true, isTSX: true, allowNamespaces: true }]],
  plugins: [
    pluginSyntaxDynamicImport,
    pluginSyntaxImportMeta,
    pluginProposalJsonStrings,
    pluginProposalOptionalChaining,
    [pluginSyntaxDecorators, { decoratorsBeforeExport: true }]
  ]
};
