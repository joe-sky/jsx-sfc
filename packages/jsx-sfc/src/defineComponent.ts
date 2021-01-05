import React, { PropsWithChildren, Ref, RefAttributes, ReactElement } from 'react';
import { Template } from './template';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D extends Template.Data>(data?: D) => D;
} & EX;

export type FuncMap = Record<string, () => any>;

type ReturnTypeMap<T extends FuncMap> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type DefineComponent<
  T = NoRef,
  P = {},
  R = T extends NoRef ? React.FC<P> : React.ForwardRefExoticComponent<P & RefAttributes<T>>,
  O = { Origin: R }
> = {
  <D extends Template.Data, S, EX extends FuncMap, FR extends { styles?: S } & ReturnTypeMap<EX>>(
    options: {
      style?: () => S;
      Component: T extends NoRef
        ? (props: SFCProps<P, FR>, context?: any) => D
        : (props: SFCProps<P, FR>, ref?: Ref<T>) => D;
      template: <U extends D>(args: { data?: U } & FR, ...tmpls: Template.Func[]) => JSXElements;
    },
    extensions?: EX
  ): R & O & { template: (data?: D) => JSXElements } & FR;

  <S, EX extends FuncMap, FR extends { styles?: S } & ReturnTypeMap<EX>>(
    options: {
      style: () => S;
      Component: T extends NoRef
        ? (props: SFCProps<P, FR>, context?: any) => JSXElements
        : (props: SFCProps<P, FR>, ref?: Ref<T>) => JSXElements;
    },
    extensions?: EX
  ): R & O & FR;

  <EX extends FuncMap, FR extends ReturnTypeMap<EX>>(
    component: T extends NoRef
      ? (props: SFCProps<P, FR>, context?: any) => JSXElements
      : (props: SFCProps<P, FR>, ref?: Ref<T>) => JSXElements,
    extensions?: EX
  ): R & O & FR;
};

export interface ForwardRefSFC extends DefineComponent {
  <T, P = {}>(): DefineComponent<T, P>;
}

export interface SFC extends DefineComponent {
  <P = {}>(): DefineComponent<NoRef, P>;
  forwardRef?: ForwardRefSFC;
  createFuncResults?: (funcMaps: FuncMap[], compiled?: boolean) => Record<string, any>;
}
