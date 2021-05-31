export type Func = (...args: any) => any;

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

export const __TEMPLATE__ = 0x5fc;

function createTemplateElement() {
  const noop: Noop = () => {};
  noop.__type = __TEMPLATE__;
  return noop;
}

export const templateElement = createTemplateElement();

export function buildCreateTemplate<T>(Template: T) {
  return function createTemplate<U extends string[]>(...names: U) {
    type TemplateType = typeof Template;
    const subs: Record<string, TemplateType> = {};

    for (let i = 0; i < names.length; i++) {
      subs[names[i]] = Template;
    }
    return Object.assign(
      (createTemplateElement() as any) as TemplateType,
      subs as Record<typeof names[number], TemplateType>
    );
  };
}
