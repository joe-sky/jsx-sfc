import 'vue';

declare module 'vue' {
  export interface HTMLAttributes {
    __children?: unknown;
  }
}
