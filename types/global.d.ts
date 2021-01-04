import 'vite';

declare module 'vite' {
  interface Plugin {
    transforms?: any[];
  }
}
