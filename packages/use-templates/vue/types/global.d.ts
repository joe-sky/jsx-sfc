declare module 'use-templates/lib/*';

declare namespace JSX {
  interface ElementChildrenAttribute {
    __children: {};
  }

  interface IntrinsicAttributes {
    __children?: unknown;
  }
}
