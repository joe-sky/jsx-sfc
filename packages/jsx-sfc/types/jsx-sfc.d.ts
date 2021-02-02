/*!
 * jsx-sfc v1.0.0-alpha.2
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactElement, ReactNode, PropsWithChildren, RefAttributes } from 'react';

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
declare const Template: <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Func<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Func>(props: {
    name?: T;
    children: T['__required'];
}) => JSXElements;
declare namespace Template {
    interface Func<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
        (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]): ReactNode;
        template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => ReactNode;
        __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: unknown[]): ReactNode;
    }
    type EL = typeof templateElement;
    type Data = Obj;
    type InternalFunc = <D extends Data>(data?: D) => D;
}

declare type NoRef = 'noRef';
declare type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    template: Template.InternalFunc;
} & EX;
declare type ExtractOptions<T> = T extends () => infer R ? (R extends Obj ? R : never) : T extends Obj ? T : unknown;
declare type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Data extends Template.Data, Styles, InferStyles extends ExtractOptions<Styles>, EX, InferEX extends ExtractOptions<EX>, FR extends {
        styles: InferStyles;
    } & InferEX>(options: {
        /**
         * Using the styles property or function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        styles?: Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => Data : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => Data;
        template: <U extends Data>(args: {
            data: U;
        } & FR, ...tmpls: Template.Func[]) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        template: (data?: Data) => JSXElements;
        Template: React.FC<Data>;
        styles: InferStyles;
    } & ExtractOptions<EX>;
    <Styles, InferStyles extends ExtractOptions<Styles>, EX, InferEX extends ExtractOptions<EX>, FR extends {
        styles: InferStyles;
    } & InferEX>(options: {
        /**
         * Using the styles property or function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        styles: Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        styles: InferStyles;
    } & ExtractOptions<EX>;
    <EX, InferEX extends ExtractOptions<EX>>(component: Ref extends NoRef ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements : (props: SFCProps<Props, InferEX>, ref?: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & ExtractOptions<EX>;
};
interface ForwardRefSFC extends DefineComponent {
    <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}
interface SFC extends DefineComponent {
    <Props = {}>(): DefineComponent<NoRef, Props>;
    forwardRef: ForwardRefSFC;
    createFuncResults: (options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) => Obj;
}
interface SFCOptions {
    template?: Func;
    Component: Func;
    styles?: Func | Obj;
}
declare type SFCExtensions = {
    __cs?: boolean;
    [key: string]: any;
};

declare function createFuncResults(options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean): Record<string, unknown>;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { DefineComponent, ForwardRefSFC, SFC, SFCExtensions, SFCOptions, SFCProps, Template, createFuncResults, forwardRef, isTemplate };
