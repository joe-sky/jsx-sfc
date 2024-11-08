import React, { PropsWithChildren, PropsWithoutRef, RefAttributes, WeakValidationMap, ValidationMap } from 'react';
import { Func, Obj, FuncMap, JSXElements, UnionToTuple } from './utils';
import { Template } from './template';
import { BuildOverview } from './overview';

type NoRef = 'noRef';

type OverviewMaxRows = 100;

export type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
  props: PropsWithChildren<Props>;
  /**
   * @deprecated Please use `props`
   */
  originalProps: PropsWithChildren<Props>;
} & EX;

type PresetStatic<Props = {}> = Obj & {
  propTypes?: WeakValidationMap<Props>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<Props>;
  displayName?: string;
};

type ExtractOptions<T, Props = null> = T extends () => infer R
  ? R extends (Props extends null ? Obj : PresetStatic<Props>)
    ? R
    : never
  : T extends (Props extends null ? Obj : PresetStatic<Props>)
    ? T
    : never;

export type DefineComponent<
  Ref = NoRef,
  Props = {},
  ReturnComponent = Ref extends NoRef
    ? React.FC<Props>
    : React.ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<Ref>>,
  Origin = { Component: ReturnComponent }
> = {
  <
    Data extends Obj,
    InferStyles extends ExtractOptions<Styles>,
    InferStatic extends ExtractOptions<Static, Props>,
    InferEX extends ExtractOptions<EX, Props>,
    FR extends { styles: InferStyles } & InferStatic & InferEX,
    Styles = {},
    Static = {},
    EX = {},
    BO = BuildOverview<OverviewMaxRows, Data, InferStyles, InferStatic>,
    Overview = UnionToTuple<keyof BO>['length'] extends 1
      ? {}
      : {
          overview: {
            [key in keyof BO]: BO[key];
          };
        }
  >(
    options: {
      /**
       * Using the `Component function` to define actual component, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => Data
        : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => Data;

      /**
       * Using the `template function` to return JSX elements, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   template: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      template?: <U extends Data>(
        args: { data: U; props: PropsWithChildren<Props> } & FR,
        ...tmpls: Template.Render[]
      ) => JSXElements;

      /**
       * Using the `render function` to return JSX elements, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user };
       *   },
       *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      render?: <U extends Data>(
        args: { data: U; props: PropsWithChildren<Props> } & FR,
        ...tmpls: Template.Render[]
      ) => JSXElements;

      /**
       * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `Emotion`)
       */
      styles?: Styles;

      /**
       * Using the `static property or function` to define any static members of a component, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user || props.initialValue };
       *   },
       *   static: { initialValue: 'test user', defaultProps: { user: 'test' } },
       *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      static?: Static;

      /**
       * @deprecated Please use `static`
       */
      options?: Static;
    },
    extensions?: EX
  ): Overview &
    ReturnComponent &
    Origin & {
      template: {
        (data?: Partial<Data>): JSXElements;
        __componentData: Data;
      };
      Render: (data?: Partial<Data>) => JSXElements;
      styles: InferStyles;
    } & ExtractOptions<Static, Props> &
    ExtractOptions<EX, Props>;

  <
    InferStyles extends ExtractOptions<Styles>,
    InferStatic extends ExtractOptions<Static, Props>,
    InferEX extends ExtractOptions<EX, Props>,
    FR extends { styles: InferStyles } & InferStatic & InferEX,
    Styles = {},
    Static = {},
    EX = {},
    BO = BuildOverview<OverviewMaxRows, {}, InferStyles, InferStatic>,
    Overview = UnionToTuple<keyof BO>['length'] extends 1
      ? {}
      : {
          overview: {
            [key in keyof BO]: BO[key];
          };
        }
  >(
    options: {
      /**
       * Using the `Component function` to define actual component, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   Component: ({ user, styles: { Wrapper } }) => {
       *     useEffect(() => console.log(user), []);
       *     return <Wrapper>{user}</Wrapper>;
       *   },
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      Component: Ref extends NoRef
        ? (props: SFCProps<Props, FR>, context?: any) => JSXElements
        : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => JSXElements;

      /**
       * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `emotion`)
       */
      styles?: Styles;

      /**
       * Using the `static property or function` to define any static members of a component, example:
       * ```tsx
       * const App = sfc<{ user: string }>()({
       *   Component: (props) => {
       *     useEffect(() => console.log(props.user), []);
       *     return { user: props.user || props.initialValue };
       *   },
       *   static: { initialValue: 'test user', defaultProps: { user: 'test' } },
       *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
       *   styles: { Wrapper: styled.div`font-size:14px` }
       * });
       * ```
       */
      static?: Static;

      /**
       * @deprecated Please use `static`
       */
      options?: Static;
    },
    extensions?: EX
  ): Overview &
    ReturnComponent &
    Origin & { styles: InferStyles } & ExtractOptions<Static, Props> &
    ExtractOptions<EX, Props>;

  <InferEX extends ExtractOptions<EX, Props>, EX = {}>(
    component: Ref extends NoRef
      ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements
      : (props: SFCProps<Props, InferEX>, ref: React.Ref<Ref>) => JSXElements,
    extensions?: EX
  ): ReturnComponent & Origin & ExtractOptions<EX, Props>;
};

export interface ForwardRefSFC<Ref = unknown> extends DefineComponent<Ref> {
  <Ref = unknown, Props = {}>(): DefineComponent<Ref, Props>;
}

export interface SFC extends DefineComponent {
  <Props = {}>(): DefineComponent<NoRef, Props>;
  forwardRef: ForwardRefSFC;
  createOptions: (options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) => Obj;
}

export interface SFCOptions {
  template?: Func;
  render?: Func;
  Component: Func;
  styles?: Func | Obj;
  static?: Func | Obj;
  /**
   * @deprecated Please use `static`
   */
  options?: Func | Obj;
}

export type SFCExtensions = Func | Obj;

export type ComponentDataType<C> = C extends { template: infer T }
  ? T extends { (...args: any): any; __componentData: infer D }
    ? D
    : never
  : never;
