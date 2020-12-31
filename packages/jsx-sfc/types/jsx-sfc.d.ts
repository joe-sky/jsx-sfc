/*!
 * jsx-sfc v0.3.2
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactNode, ReactElement, PropsWithChildren, RefAttributes, Ref } from 'react';

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

declare type NoRef = 'noRef';
declare type JSXElements = ReactElement<any, any> | null;
declare type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
    template: <D extends Template.Data>(data?: D) => D;
} & EX;
declare type FuncMap = Record<string, () => any>;
declare type ReturnTypeMap<T extends FuncMap> = {
    [P in keyof T]: ReturnType<T[P]>;
};
declare type DefineComponent<T = NoRef, P = {}, R = T extends NoRef ? React.FC<P> : React.ForwardRefExoticComponent<P & RefAttributes<T>>> = {
    <D extends Template.Data, S, EX extends FuncMap, FR extends {
        styles?: S;
    } & ReturnTypeMap<EX>>(options: {
        style?: () => S;
        Component: T extends NoRef ? (props: SFCProps<P, FR>, context?: any) => D : (props: SFCProps<P, FR>, ref?: Ref<T>) => D;
        template: <U extends D>(args: {
            data?: U;
        } & FR, ...tmpls: Template.Func[]) => JSXElements;
    }, extensions?: EX): R & {
        template: (data?: D) => JSXElements;
    } & FR;
    <S, EX extends FuncMap, FR extends {
        styles?: S;
    } & ReturnTypeMap<EX>>(options: {
        style: () => S;
        Component: T extends NoRef ? (props: SFCProps<P, FR>, context?: any) => JSXElements : (props: SFCProps<P, FR>, ref?: Ref<T>) => JSXElements;
    }, extensions?: EX): R & FR;
    <EX extends FuncMap, FR extends ReturnTypeMap<EX>>(component: T extends NoRef ? (props: SFCProps<P, FR>, context?: any) => JSXElements : (props: SFCProps<P, FR>, ref?: Ref<T>) => JSXElements, extensions?: EX): R & FR;
};
interface ForwardRefSFC extends DefineComponent {
    <T, P = {}>(): DefineComponent<T, P>;
}
interface SFC extends DefineComponent {
    <P = {}>(): DefineComponent<NoRef, P>;
    forwardRef?: ForwardRefSFC;
    createFuncResults?: (funcMaps: FuncMap[], compiled?: boolean) => Record<string, any>;
}

declare function createFuncResults(funcMaps: FuncMap[], compiled?: boolean): Record<string, any>;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { DefineComponent, ForwardRefSFC, FuncMap, JSXElements, SFC, SFCProps, Template, createFuncResults, forwardRef, isTemplate };
