import React, { PropsWithChildren, ReactNode } from 'react';

export type SfcProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D>(data: D) => D;
} & EX;

export interface SfcInnerProps {
  template: (...args: any) => any;
}

export namespace Template {
  export interface Func<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
    template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => ReactNode;
  }
}

export type ComponentCreator<P> = <D, S, C, SP = { styles?: S }>(props: {
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
}) => React.FC<P extends Record<string, unknown> ? P : {}>;
