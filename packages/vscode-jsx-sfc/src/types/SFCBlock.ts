export interface SFCBlock {
  locStartOffset: number;
  locEndOffset: number;
}

export type Descriptor = Record<'template' | 'component' | 'styles' | 'static', SFCBlock[]>;

export enum BlocksType {
  Component = 1,
  Template = 2,
  Styles = 3
}
