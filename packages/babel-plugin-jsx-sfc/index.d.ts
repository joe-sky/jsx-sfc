/*!
 * babel-plugin-jsx-sfc v1.4.2
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import { NodePath, Visitor } from '@babel/traverse';
import { CallExpression, Identifier } from '@babel/types';

declare function isImportedByLib(identifier: string, path: NodePath<CallExpression>, libName?: string | string[]): boolean | undefined;
declare function isCalleeImportedBySfc(callee: CallExpression['callee'], path: NodePath<CallExpression>, libName?: string | string[], customImportName?: Identifier): boolean | Identifier | undefined;

declare const ast_isImportedByLib: typeof isImportedByLib;
declare const ast_isCalleeImportedBySfc: typeof isCalleeImportedBySfc;
declare namespace ast {
  export {
    ast_isImportedByLib as isImportedByLib,
    ast_isCalleeImportedBySfc as isCalleeImportedBySfc,
  };
}

declare const SFC_LIB = "jsx-sfc";
declare const SFC_FUNC = "sfc";
declare const SFC_COMPONENT = "Component";
declare const SFC_TEMPLATE = "template";
declare const SFC_STYLES = "styles";
declare const SFC_STATIC = "static";
declare const SFC_OPTIONS = "options";
declare const SFC_CREATE_OPTIONS = "createOptions";
declare const SFC_FORWARD_REF = "forwardRef";
declare function getOptionsName(line?: number): string;
declare function getSfcName(line?: number): string;

declare const index_SFC_LIB: typeof SFC_LIB;
declare const index_SFC_FUNC: typeof SFC_FUNC;
declare const index_SFC_COMPONENT: typeof SFC_COMPONENT;
declare const index_SFC_TEMPLATE: typeof SFC_TEMPLATE;
declare const index_SFC_STYLES: typeof SFC_STYLES;
declare const index_SFC_STATIC: typeof SFC_STATIC;
declare const index_SFC_OPTIONS: typeof SFC_OPTIONS;
declare const index_SFC_CREATE_OPTIONS: typeof SFC_CREATE_OPTIONS;
declare const index_SFC_FORWARD_REF: typeof SFC_FORWARD_REF;
declare const index_getOptionsName: typeof getOptionsName;
declare const index_getSfcName: typeof getSfcName;
declare namespace index {
  export {
    index_SFC_LIB as SFC_LIB,
    index_SFC_FUNC as SFC_FUNC,
    index_SFC_COMPONENT as SFC_COMPONENT,
    index_SFC_TEMPLATE as SFC_TEMPLATE,
    index_SFC_STYLES as SFC_STYLES,
    index_SFC_STATIC as SFC_STATIC,
    index_SFC_OPTIONS as SFC_OPTIONS,
    index_SFC_CREATE_OPTIONS as SFC_CREATE_OPTIONS,
    index_SFC_FORWARD_REF as SFC_FORWARD_REF,
    index_getOptionsName as getOptionsName,
    index_getSfcName as getSfcName,
  };
}

interface State {
    opts?: {
        importedLib?: string[];
    };
    customImportName?: Identifier;
}
declare const _default: () => {
    name: string;
    visitor: Visitor<{}>;
};

export default _default;
export { State, ast as astUtils, index as utils };
