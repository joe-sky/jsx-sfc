import 'vue';

declare module 'vue' {
  export interface HTMLAttributes {
    children?: any;
  }

  export interface ComponentCustomProps {
    children?: any;
  }
}
