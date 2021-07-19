/*!
 * jsx-sfc v1.5.1
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactElement, PropsWithChildren, RefAttributes, WeakValidationMap, ValidationMap } from 'react';

declare type Func = (...args: any) => any;
interface Noop {
    (): any;
    [key: string]: any;
}
declare const templateElement: Noop;

declare type Obj = Record<string, unknown>;
declare type FuncMap = Record<string, Func | Obj | undefined>;
declare type JSXElements = ReactElement<any, any> | null;

declare function isTemplate(templateElement: any): templateElement is Template.EL;
declare const Template: <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render>(props: {
    name?: T;
    children: T['__required'];
}) => JSXElements;
interface TemplateRender<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
    (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]): JSXElements;
    render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
    __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: any[]): JSXElements;
    /**
     * @deprecated Please use `render`
     */
    template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
}
declare namespace Template {
    type Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = TemplateRender<Arg1, Arg2, Arg3, Arg4, Arg5>;
    /**
     * @deprecated Please use `Template.Render`
     */
    type Func<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = Render<Arg1, Arg2, Arg3, Arg4, Arg5>;
    type EL = typeof templateElement;
}
declare const createTemplate: <U extends string[]>(...names: U) => (<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T | undefined;
    children: T["__required"];
}) => JSXElements) & Record<U[number], <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T | undefined;
    children: T["__required"];
}) => JSXElements>;

declare type NoRef = 'noRef';
declare type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    props: PropsWithChildren<Props>;
    /**
     * @deprecated Please use `props`
     */
    originalProps: PropsWithChildren<Props>;
} & EX;
declare type PresetStatic<Props = {}> = Obj & {
    propTypes?: WeakValidationMap<Props>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<Props>;
    displayName?: string;
};
declare type ExtractOptions<T, Props = null> = T extends () => infer R ? R extends (Props extends null ? Obj : PresetStatic<Props>) ? R : never : T extends (Props extends null ? Obj : PresetStatic<Props>) ? T : unknown;
declare type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Data extends Obj, InferStyles extends ExtractOptions<Styles>, InferStatic extends ExtractOptions<Static, Props>, InferEX extends ExtractOptions<EX, Props>, FR extends {
        styles: InferStyles;
    } & InferStatic & InferEX, Styles = {}, Static = {}, EX = {}>(options: {
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
        template?: <U extends Data>(args: {
            data: U;
            props: PropsWithChildren<Props>;
        } & FR, ...tmpls: Template.Render[]) => JSXElements;
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
        render?: <U extends Data>(args: {
            data: U;
            props: PropsWithChildren<Props>;
        } & FR, ...tmpls: Template.Render[]) => JSXElements;
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
    }, extensions?: EX): ReturnComponent & Origin & {
        template: {
            (data?: Partial<Data>): JSXElements;
            __componentData: Data;
        };
        Render: (data?: Partial<Data>) => JSXElements;
        styles: InferStyles;
    } & ExtractOptions<Static, Props> & ExtractOptions<EX, Props>;
    <InferStyles extends ExtractOptions<Styles>, InferStatic extends ExtractOptions<Static, Props>, InferEX extends ExtractOptions<EX, Props>, FR extends {
        styles: InferStyles;
    } & InferStatic & InferEX, Styles = {}, Static = {}, EX = {}>(options: {
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
    }, extensions?: EX): ReturnComponent & Origin & {
        styles: InferStyles;
    } & ExtractOptions<Static, Props> & ExtractOptions<EX, Props>;
    <InferEX extends ExtractOptions<EX, Props>, EX = {}>(component: Ref extends NoRef ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements : (props: SFCProps<Props, InferEX>, ref: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & ExtractOptions<EX, Props>;
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
    render?: Func;
    Component: Func;
    styles?: Func | Obj;
    static?: Func | Obj;
    /**
     * @deprecated Please use `static`
     */
    options?: Func | Obj;
}
declare type SFCExtensions = Func | Obj;
declare type ComponentDataType<C> = C extends {
    template: infer T;
} ? T extends {
    (...args: any): any;
    __componentData: infer D;
} ? D : never : never;

declare function createOptions(options: FuncMap, extensions?: SFCExtensions): Obj;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { ComponentDataType, DefineComponent, ForwardRefSFC, SFC, SFCExtensions, SFCOptions, SFCProps, Template, TemplateRender, createOptions, createTemplate, forwardRef, isTemplate };
