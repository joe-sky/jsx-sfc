import i18n from 'i18next';

export function locales<T extends Record<string, Record<string, unknown>>>(locales: T) {
  for (let lng in locales) {
    i18n.addResourceBundle(lng, 'translation', locales[lng]);
  }

  return {
    locales
  };
}
