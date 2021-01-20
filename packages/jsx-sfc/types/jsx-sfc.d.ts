/*!
 * jsx-sfc v1.0.0-alpha.1
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactNode, ReactElement, PropsWithChildren, RefAttributes } from 'react';

declare type Func = (...args: any) => any;
declare type Obj = Record<string, unknown>;
declare type FuncMap = Record<string, Func>;

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
    type Data = Obj;
}

declare type NoRef = 'noRef';
declare type JSXElements = ReactElement<any, any> | null;
declare type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    template: <Data extends Template.Data>(data?: Data) => Data;
} & EX;
declare type ObjOrFuncReturn<T> = T extends () => infer R ? R : T extends Obj ? T : never;
declare type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<Props & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Data extends Template.Data, Styles, InferStyles extends ObjOrFuncReturn<Styles>, EX, InferEX extends ObjOrFuncReturn<EX>, FR extends {
        styles?: InferStyles;
    } & InferEX>(options: {
        /**
         * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        style?: Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => Data : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => Data;
        template: <U extends Data>(args: {
            data?: U;
        } & FR, ...tmpls: Template.Func[]) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        template: (data?: Data) => JSXElements;
        styles?: InferStyles;
    } & InferEX;
    <Styles, InferStyles extends ObjOrFuncReturn<Styles>, EX, InferEX extends ObjOrFuncReturn<EX>, FR extends {
        styles?: InferStyles;
    } & InferEX>(options: {
        /**
         * Using the style function to define styles, you can use the most popular `CSS in JS` frameworks. (e.g. `styled-components`, `emotion`, `JSS`)
         */
        style: Styles;
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref?: React.Ref<Ref>) => JSXElements;
    }, extensions?: EX): ReturnComponent & Origin & {
        styles?: InferStyles;
    } & InferEX;
    <EX, InferEX extends ObjOrFuncReturn<EX>>(component: Ref extends NoRef ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements : (props: SFCProps<Props, InferEX>, ref?: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & InferEX;
};
interface ForwardRefSFC extends DefineComponent {
    <Ref, Props = {}>(): DefineComponent<Ref, Props>;
}
interface SFC extends DefineComponent {
    <Props = {}>(): DefineComponent<NoRef, Props>;
    forwardRef?: ForwardRefSFC;
    createFuncResults?: (options: FuncMap, extensions?: Func, isRuntime?: boolean) => Obj;
}
interface SFCOptions {
    template?: Func;
    Component?: Func;
    style?: Func;
}
declare type SFCExtensions = Obj;

declare function createFuncResults(options: FuncMap, extensions?: Func, isRuntime?: boolean): Record<string, unknown>;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { DefineComponent, ForwardRefSFC, JSXElements, SFC, SFCExtensions, SFCOptions, SFCProps, Template, createFuncResults, forwardRef, isTemplate };
