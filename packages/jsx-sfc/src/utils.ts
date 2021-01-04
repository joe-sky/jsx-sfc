export function isFunc(value: any) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

// Reference by https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;
const BRACES = /\{[^{}]+\}/g;

function clearBraces(argsStr: string): string {
  return BRACES.test(argsStr) ? clearBraces(argsStr.replace(BRACES, 'arg')) : argsStr;
}

export function getFuncParams(func: Function) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  const argsStr = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
  return clearBraces(argsStr).match(ARGUMENT_NAMES) || [];
}
