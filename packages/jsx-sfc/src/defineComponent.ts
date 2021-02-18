import React, { PropsWithChildren, RefAttributes } from 'react';
import { Template } from './template';
import { Func, Obj, FuncMap, JSXElements } from './utils';

type NoRef = 'noRef';

export type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
  template: Template.InternalFunc;
} & EX;

type ExtractOptions<T> = T extends () => infer R ? (R extends Obj ? R : never) : T extends Obj ? T : unknown;

export type DefineComponent<
  Ref = NoRef,
  Props = {},
  ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>,
  Origin = { Component: ReturnComponent }
> = {
  <
    Data extends Template.Data,
    Styles,
    InferStyles extends ExtractOptions<Styles>,
    EX,
    InferEX extends ExtractOptions<EX>,
    FR extends { styles: InferStyles } & InferEX
  >(
    options: {
      /**
       * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
       */
      styles?: Styles;
      /**
       * Using the `Component function` to define actual components, example:
       * ```tsx
       * const App = sfc({
       *   template: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => Data
        : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => Data;
      /**
       * Using the `template function` to return JSX elements, example:
       * ```tsx
       * const App = sfc({
       *   template: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      template: <U extends Data>(args: { data: U } & FR, ...tmpls: Template.Func[]) => JSXElements;
    },
    extensions?: EX
  ): ReturnComponent &
    Origin & {
      template: (data?: Data) => JSXElements;
      styles: InferStyles;
    } & ExtractOptions<EX>;

  <
    Styles,
    InferStyles extends ExtractOptions<Styles>,
    EX,
    InferEX extends ExtractOptions<EX>,
    FR extends { styles: InferStyles } & InferEX
  >(
    options: {
      /**
       * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
       */
      styles: Styles;
      /**
       * Using the `Component function` to define actual components, example:
       * ```tsx
       * const App = sfc({
       *   template: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => JSXElements
        : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    },
    extensions?: EX
  ): ReturnComponent & Origin & { styles: InferStyles } & ExtractOptions<EX>;

  <EX, InferEX extends ExtractOptions<EX>>(
    component: Ref extends NoRef
      ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements
      : (props: SFCProps<Props, InferEX>, ref?: React.Ref<Ref>) => JSXElements,
    extensions?: EX
  ): ReturnComponent & Origin & ExtractOptions<EX>;
};

export interface ForwardRefSFC extends DefineComponent {
  <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}

export interface SFC extends DefineComponent {
  <Props = {}>(): DefineComponent<NoRef, Props>;
  forwardRef: ForwardRefSFC;
  createFuncResults: (options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) => Obj;
}

export interface SFCOptions {
  template?: Func;
  Component: Func;
  styles?: Func | Obj;
}

export type SFCExtensions = {
  __cs?: boolean;
  [key: string]: any;
};
