import React, { PropsWithChildren, Ref, RefAttributes } from 'react';
import { Template } from './template';

export type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D>(data: D) => D;
} & EX;

export interface SFCInnerProps {
  template: (...args: any) => any;
}

export type DefineComponent<T, P = {}> = <D, S, C, SP = { styles?: S }, RP = P extends {} ? P : {}>(props: {
  style?: () => S;
  styles?: S;
  components?: (styles: S) => C;
  Component?: T extends 'noRef'
    ? <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, context?: any) => D
    : <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, ref?: Ref<T>) => D;
  template?: <U extends D, UC extends C>(data: U, others?: SP & { components?: UC }) => JSX.Element;
  templates?: <U extends D, UC extends C>(
    data: U,
    others?: SP & { components?: UC },
    ...tmpls: Template.Func[]
  ) => JSX.Element;
}) => T extends 'noRef' ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
