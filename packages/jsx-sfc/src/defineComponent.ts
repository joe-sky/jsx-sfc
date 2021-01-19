import React, { PropsWithChildren, RefAttributes, ReactElement } from 'react';
import { Template } from './template';
import { Func, Obj, FuncMap } from './utils';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
  template: <Data extends Template.Data>(data?: Data) => Data;
} & EX;

export type DefineComponent<
  Ref = NoRef,
  Props = {},
  ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>,
  Origin = { Component: ReturnComponent }
> = {
  <Data extends Template.Data, Styles extends Obj, EX extends Obj, FR extends { styles?: Styles } & EX>(
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
    extensions?: () => EX
  ): ReturnComponent & Origin & { template: (data?: Data) => JSXElements; styles?: Styles } & EX;

  <Styles extends Obj, EX extends Obj, FR extends { styles?: Styles } & EX>(
    options: {
      /**
       * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
       */
      style: () => Styles;
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => JSXElements
        : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    },
    extensions?: () => EX
  ): ReturnComponent & Origin & { styles?: Styles } & EX;

  <EX extends Obj>(
    component: Ref extends NoRef
      ? (props: SFCProps<Props, EX>, context?: any) => JSXElements
      : (props: SFCProps<Props, EX>, ref?: React.Ref<Ref>) => JSXElements,
    extensions?: () => EX
  ): ReturnComponent & Origin & EX;
};

export interface ForwardRefSFC extends DefineComponent {
  <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}

export interface SFC extends DefineComponent {
  <Props = {}>(): DefineComponent<NoRef, Props>;
  forwardRef?: ForwardRefSFC;
  createFuncResults?: (options: FuncMap, extensions?: Func, isRuntime?: boolean) => Obj;
}

export interface SFCOptions {
  template?: Func;
  Component?: Func;
  style?: Func;
}

export type SFCExtensions = Obj;
