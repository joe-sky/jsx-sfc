import 'vite';
import { VNode } from 'vue';

declare module 'vite' {
  interface Plugin {
    transforms?: any[];
  }
}

declare module 'react' {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>>
    extends VNode {
    type: T;
    props: P;
    key: Key | null;
  }
}
