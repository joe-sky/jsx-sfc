import i18n from 'i18next';
import translation from './en/translation.json';
import translationJa from './ja/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation
  },
  ja: {
    translation: translationJa
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources
});
