import 'react-i18next';
import { resources } from '../../src/i18n/config';
import App from '../../src/App';

// Solve the problem of TS circular reference, must be extended by interface(can't by type)
type OriginalEn = typeof App.locales.en;
interface En extends OriginalEn {}

declare module 'react-i18next' {
  type DefaultResources = {
    translation: En;
  } & typeof resources['en'];
  interface Resources extends DefaultResources {}
}
