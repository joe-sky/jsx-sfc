/*!
 * jsx-sfc v0.4.0
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactNode, ReactElement, PropsWithChildren, RefAttributes } from 'react';

declare const templateFc: {
    (): void;
    __type: number;
};
declare function isTemplate(templateFc: any): templateFc is Template.FC;
declare const Template: <Arg1, Arg2, Arg3, Arg4, Arg5, T extends Template.Func<Arg1, Arg2, Arg3, Arg4, Arg5>>(props: {
    name?: T;
    children: T['template'];
}) => JSX.Element;
declare namespace Template {
    interface Func<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
        template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => ReactNode;
    }
    type FC = typeof templateFc;
    type Data = Record<string, unknown>;
}

declare type Func = (...args: any) => any;
declare type Obj = Record<string, any>;

declare type NoRef = 'noRef';
declare type JSXElements = ReactElement<any, any> | null;
declare type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    template: <Data extends Template.Data>(data?: Data) => Data;
} & EX;
declare type FuncMap = Record<string, Func>;
declare type ReturnTypeMap<T extends FuncMap> = {
    [P in keyof T]: ReturnType<T[P]>;
};
declare type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Styles, Data extends Template.Data, EX extends FuncMap, FR extends {
        styles?: Styles;
    } & ReturnTypeMap<EX>>(options: {
        /**
         * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        style?: () => Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => Data : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => Data;
        template: <U extends Data>(args: {
            data?: U;
        } & FR, ...tmpls: Template.Func[]) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        template: (data?: Data) => JSXElements;
        styles?: Styles;
    } & ReturnTypeMap<EX>;
    <Styles, EX extends FuncMap, FR extends {
        styles?: Styles;
    } & ReturnTypeMap<EX>>(options: {
        /**
         * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        style: () => Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        styles?: Styles;
    } & ReturnTypeMap<EX>;
    <EX extends FuncMap, FR extends ReturnTypeMap<EX>>(component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & ReturnTypeMap<EX>;
};
interface ForwardRefSFC extends DefineComponent {
    <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}
interface SFC extends DefineComponent {
    <Props = {}>(): DefineComponent<NoRef, Props>;
    forwardRef?: ForwardRefSFC;
    createFuncResults?: (funcMaps: FuncMap[], compiled?: boolean) => Obj;
}

declare function createFuncResults(funcMaps: FuncMap[], isRuntime?: boolean): Record<string, any>;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { DefineComponent, ForwardRefSFC, FuncMap, JSXElements, SFC, SFCProps, Template, createFuncResults, forwardRef, isTemplate };
