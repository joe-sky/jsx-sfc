export const SFC_LIB = 'jsx-sfc';

export const SFC_FUNC = 'sfc';

export const SFC_COMPONENT = 'Component';

export const SFC_CREATE_FUNC_RESULTS = 'createFuncResults';

export const SFC_FORWARD_REF = 'forwardRef';

export function getFuncResultsName(line = 0) {
  return `$sfcFuncResults_${line}`;
}
