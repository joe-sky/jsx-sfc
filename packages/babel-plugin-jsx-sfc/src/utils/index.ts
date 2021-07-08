export const SFC_LIB = 'jsx-sfc';

export const SFC_FUNC = 'sfc';

export const SFC_COMPONENT = 'Component';

export const SFC_TEMPLATE = 'template';

export const SFC_RENDER = 'render';

export const SFC_STYLES = 'styles';

export const SFC_STATIC = 'static';

export const SFC_OPTIONS = 'options';

export const SFC_CREATE_OPTIONS = 'createOptions';

export const SFC_FORWARD_REF = 'forwardRef';

export function getOptionsName(line = 0) {
  return `$sfcOptions_${line}`;
}

export function getSfcName(line = 0) {
  return `Sfc_${line}`;
}
