/*!
 * jsx-sfc v1.3.0-alpha.5
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactElement, PropsWithChildren, RefAttributes } from 'react';

declare type Func = (...args: any) => any;
declare type Obj = Record<string, unknown>;
declare type FuncMap = Record<string, Func | Obj | undefined>;
declare type JSXElements = ReactElement<any, any> | null;
interface Noop {
    (): any;
    [key: string]: any;
}

declare const templateElement: Noop;
declare function isTemplate(templateElement: any): templateElement is Template.EL;
declare const Template: <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render>(props: {
    name?: T;
    children: T['__required'];
}) => JSXElements;
declare namespace Template {
    interface Render<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
        (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]): JSXElements;
        render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => JSXElements;
        __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: unknown[]): JSXElements;
        /**
         * @deprecated Please use `render`
         */
        template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => JSXElements;
    }
    /**
     * @deprecated Please use `Template.Render`
     */
    type Func<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> = Render<Arg1, Arg2, Arg3, Arg4, Arg5>;
    type EL = typeof templateElement;
    type ComponentData = Obj;
    type InternalFunc = <D extends ComponentData>(data?: D) => D;
}

declare type NoRef = 'noRef';
declare type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    template: Template.InternalFunc;
    originalProps: PropsWithChildren<Props>;
} & EX;
declare type ExtractOptions<T> = T extends () => infer R ? (R extends Obj ? R : never) : T extends Obj ? T : unknown;
declare type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Data extends Template.ComponentData, InferStyles extends ExtractOptions<Styles>, InferOP extends ExtractOptions<OP>, InferEX extends ExtractOptions<EX>, FR extends {
        styles: InferStyles;
    } & InferOP & InferEX, Styles = {}, OP = {}, EX = {}>(options: {
        /**
         * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `Emotion`)
         */
        styles?: Styles;
        /**
         * Using the `Component function` to define actual component, example:
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
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => Data : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => Data;
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
        template: <U extends Data>(args: {
            data: U;
        } & FR, ...tmpls: Template.Render[]) => JSXElements;
        options?: OP;
    }, extensions?: EX): ReturnComponent & Origin & {
        template: (data?: Partial<Data>) => JSXElements;
        styles: InferStyles;
    } & ExtractOptions<OP> & ExtractOptions<EX>;
    <InferStyles extends ExtractOptions<Styles>, InferOP extends ExtractOptions<OP>, InferEX extends ExtractOptions<EX>, FR extends {
        styles: InferStyles;
    } & InferOP & InferEX, Styles = {}, OP = {}, EX = {}>(options: {
        /**
         * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `emotion`)
         */
        styles?: Styles;
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
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => JSXElements;
        options?: OP;
    }, extensions?: EX): ReturnComponent & Origin & {
        styles: InferStyles;
    } & ExtractOptions<OP> & ExtractOptions<EX>;
    <InferEX extends ExtractOptions<EX>, EX = {}>(component: Ref extends NoRef ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements : (props: SFCProps<Props, InferEX>, ref: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & ExtractOptions<EX>;
};
interface ForwardRefSFC<Ref = unknown> extends DefineComponent<Ref> {
    <Ref = unknown, Props = {}>(): DefineComponent<Ref, Props>;
}
interface SFC extends DefineComponent {
    <Props = {}>(): DefineComponent<NoRef, Props>;
    forwardRef: ForwardRefSFC;
    createOptions: (options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) => Obj;
}
interface SFCOptions {
    template?: Func;
    Component: Func;
    styles?: Func | Obj;
    options?: Func | Obj;
}
declare type SFCExtensions = {
    __cs?: boolean;
    [key: string]: any;
};
declare type ComponentDataType<C> = C extends {
    template: infer T;
} ? T extends (...args: infer P) => any ? Required<P[0]> : never : never;

declare function createOptions(options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean): Record<string, unknown>;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { ComponentDataType, DefineComponent, ForwardRefSFC, SFC, SFCExtensions, SFCOptions, SFCProps, Template, createOptions, forwardRef, isTemplate };
