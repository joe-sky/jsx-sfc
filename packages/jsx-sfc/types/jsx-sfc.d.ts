/*!
 * jsx-sfc v0.2.1
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactNode, ReactElement, PropsWithChildren, Ref, RefAttributes } from 'react';

declare const templateFc: {
    (): void;
    __type: number;
};
declare function isTemplate(templateFc: any): templateFc is Template.FC;
declare const Template: <Arg1, Arg2, Arg3, Arg4, Arg5, T extends Template.Func<Arg1, Arg2, Arg3, Arg4, Arg5>>(props: {
    name: T;
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
    template: <D extends Template.Data>(data: D) => D;
} & EX;
interface SFCInnerProps {
    template: (...args: any) => any;
    style: Record<string, any>;
}
declare type DefineComponent<T, P = {}> = {
    <D extends Template.Data, S, SP = {
        style?: S;
    }, RP = P extends {} ? P : {}>(options: {
        style?: () => S;
        Component: T extends NoRef ? (props: SFCProps<P, SP>, context?: any) => D : (props: SFCProps<P, SP>, ref?: Ref<T>) => D;
        template: <U extends D>(args: {
            data: U;
        } & SP) => JSXElements;
    }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
    <D, S, SP = {
        style?: S;
    }, RP = P extends {} ? P : {}>(options: {
        style?: () => S;
        Component: T extends NoRef ? (props: SFCProps<P, SP>, context?: any) => D : (props: SFCProps<P, SP>, ref?: Ref<T>) => D;
        templates: <U extends D>(args: {
            data: U;
        } & SP, ...tmpls: Template.Func[]) => JSX.Element;
    }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
    <S, SP = {
        style?: S;
    }, RP = P extends {} ? P : {}>(options: {
        style?: () => S;
        Component: T extends NoRef ? (props: SFCProps<P, SP>, context?: any) => JSXElements : (props: SFCProps<P, SP>, ref?: Ref<T>) => JSXElements;
    }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
};
declare type ForwardRefSFC = <T, P = {}>(displayName?: string) => DefineComponent<T, P>;
interface SFC {
    <P = {}>(displayName?: string): DefineComponent<NoRef, P>;
    forwardRef?: ForwardRefSFC;
    component?: DefineComponent<NoRef, {}>;
}

declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;
declare const component: DefineComponent<"noRef", {}>;

export default sfc;
export { DefineComponent, ForwardRefSFC, JSXElements, SFC, SFCInnerProps, SFCProps, Template, component, forwardRef, isTemplate };
