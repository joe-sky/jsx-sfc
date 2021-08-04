export interface SFCBlock {
  locStartOffset: number;
  locEndOffset: number;
}

export type Descriptor = Record<'component' | 'render' | 'styles' | 'static', SFCBlock[]>;

export enum BlocksType {
  Component = 1,
  Render = 2,
  Styles = 3
}
