import React, { PropsWithChildren } from 'react';
import { Template } from './template';

export type SfcProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D>(data: D) => D;
} & EX;

export interface SfcInnerProps {
  template: (...args: any) => any;
}

export type DefineComponent<P> = <D, S, C, SP = { styles?: S }>(props: {
  style?: () => S;
  styles?: S;
  components?: (styles: S) => C;
  Component?: <UC extends C>(props: SfcProps<P, SP & { components?: UC }>, ref?: any) => D;
  template?: <U extends D, UC extends C>(data: U, others?: SP & { components?: UC }) => JSX.Element;
  templates?: <U extends D, UC extends C>(
    data: U,
    others?: SP & { components?: UC },
    ...tmpls: Template.Func[]
  ) => JSX.Element;
}) => React.FC<P extends {} ? P : {}>;
