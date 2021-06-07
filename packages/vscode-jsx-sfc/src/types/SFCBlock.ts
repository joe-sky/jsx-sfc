export interface SFCBlock {
  locStartOffset: number;
  locEndOffset: number;
}

export type Descriptor = Record<'template' | 'component' | 'styles' | 'options', SFCBlock[]>;
