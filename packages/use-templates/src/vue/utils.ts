import { VNodeChild, VNodeArrayChildren } from 'vue';

export type Func = (...args: any) => any;

export type JSXElements = VNodeChild;

export type VNodeArrayChildrenWithDefault = VNodeArrayChildren & { default: Func };

export interface Noop {
  (): any;
  [key: string]: any;
}

export const noop: Noop = () => {};

export function emptyObjs(length: number) {
  return Object.keys(Array.apply(null, { length } as Array<any>)).map(() => ({}));
}

/**
 * Reference by https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
 */
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;
const BRACES = /\{[^{}]+\}/g;

/**
 * Transform `function({ data, styles: {...} }, arg2)` to `function(arg, arg2)`
 */
function clearBraces(argsStr: string): string {
  return BRACES.test(argsStr) ? clearBraces(argsStr.replace(BRACES, 'arg')) : argsStr;
}

export function getFuncParams(func: Func) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  const argsStr = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
  return clearBraces(argsStr).match(ARGUMENT_NAMES) || [];
}
