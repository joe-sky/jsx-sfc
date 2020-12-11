import React, { PropsWithChildren, Ref, RefAttributes, ReactElement } from 'react';
import { Template } from './template';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D extends Template.Data>(data?: D) => D;
} & EX;

export interface SFCInnerProps {
  template: (...args: any) => any;
  styles: Record<string, any>;
  ref: any;
}

export type FuncMap = Record<string, () => any>;

type ReturnTypeMap<T extends FuncMap> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type DefineComponent<T = NoRef, P = {}> = {
  <
    D extends Template.Data,
    S,
    EX extends FuncMap,
    SE extends { styles?: S } & ReturnTypeMap<EX>,
    RP = P extends {} ? P : {}
  >(
    options: {
      style?: () => S;
      Component: T extends NoRef
        ? (props: SFCProps<P, SE>, context?: any) => D
        : (props: SFCProps<P, SE>, ref?: Ref<T>) => D;
      template: <U extends D>(args: { data: U } & SE, ...tmpls: Template.Func[]) => JSXElements;
    },
    extensions?: EX
  ): (T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>) & SE;

  <S, EX extends FuncMap, SE extends { styles?: S } & ReturnTypeMap<EX>, RP = P extends {} ? P : {}>(
    options: {
      style?: () => S;
      Component: T extends NoRef
        ? (props: SFCProps<P, SE>, context?: any) => JSXElements
        : (props: SFCProps<P, SE>, ref?: Ref<T>) => JSXElements;
    },
    extensions?: EX
  ): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
};

export interface ForwardRefSFC extends DefineComponent {
  <T, P = {}>(): DefineComponent<T, P>;
}

export interface SFC extends DefineComponent {
  <P = {}>(): DefineComponent<NoRef, P>;
  forwardRef?: ForwardRefSFC;
}
