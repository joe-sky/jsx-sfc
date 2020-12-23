export function isFunc(value: any) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

// Reference by https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

export function getFuncParams(func: Function) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES) || [];
}
