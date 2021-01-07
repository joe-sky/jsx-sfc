import React, { PropsWithChildren, RefAttributes, ReactElement } from 'react';
import { Template } from './template';
import { Func, Obj } from './utils';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
  template: <Data extends Template.Data>(data?: Data) => Data;
} & EX;

export type FuncMap = Record<string, Func>;

type ReturnTypeMap<T extends FuncMap> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type DefineComponent<
  Ref = NoRef,
  Props = {},
  ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>,
  Origin = { origin: ReturnComponent }
> = {
  <Data extends Template.Data, Styles, EX extends FuncMap, FR extends { styles?: Styles } & ReturnTypeMap<EX>>(
    options: {
      /**
       * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
       */
      style?: () => Styles;
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => Data
        : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => Data;
      template: <U extends Data>(args: { data?: U } & FR, ...tmpls: Template.Func[]) => JSXElements;
    },
    extensions?: EX
  ): ReturnComponent & { template: (data?: Data) => JSXElements } & FR & Origin;

  <Styles, EX extends FuncMap, FR extends { styles?: Styles } & ReturnTypeMap<EX>>(
    options: {
      /**
       * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
       */
      style: () => Styles;
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => JSXElements
        : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    },
    extensions?: EX
  ): ReturnComponent & FR & Origin;

  <EX extends FuncMap, FR extends ReturnTypeMap<EX>>(
    component: Ref extends NoRef
      ? (props: SFCProps<Props, FR>, context?: any) => JSXElements
      : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements,
    extensions?: EX
  ): ReturnComponent & FR & Origin;
};

export interface ForwardRefSFC extends DefineComponent {
  <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}

export interface SFC extends DefineComponent {
  <Props = {}>(): DefineComponent<NoRef, Props>;
  forwardRef?: ForwardRefSFC;
  createFuncResults?: (funcMaps: FuncMap[], compiled?: boolean) => Obj;
}
