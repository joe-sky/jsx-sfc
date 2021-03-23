import 'react-i18next';
import { resources } from '../../src/i18n/config';
import App from '../../src/App';

const AppResources = {
  translation: App.locales.en
};

declare module 'react-i18next' {
  type DefaultResources = typeof AppResources & typeof resources['en'];
  interface Resources extends DefaultResources {}
}
