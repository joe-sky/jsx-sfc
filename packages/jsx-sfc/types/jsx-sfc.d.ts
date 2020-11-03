/*!
 * jsx-sfc v0.1.0
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactNode, PropsWithChildren, Ref, RefAttributes } from 'react';

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
    interface Func<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
        template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => ReactNode;
    }
    type FC = typeof templateFc;
}

declare type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
    template: <D>(data: D) => D;
} & EX;
interface SFCInnerProps {
    template: (...args: any) => any;
}
declare type DefineComponent<T, P = {}> = <D, S, C, SP = {
    styles?: S;
}, RP = P extends {} ? P : {}>(props: {
    style?: () => S;
    styles?: S;
    components?: (styles: S) => C;
    Component?: T extends 'noRef' ? <UC extends C>(props: SFCProps<P, SP & {
        components?: UC;
    }>, context?: any) => D : <UC extends C>(props: SFCProps<P, SP & {
        components?: UC;
    }>, ref?: Ref<T>) => D;
    template?: <U extends D, UC extends C>(data: U, others?: SP & {
        components?: UC;
    }) => JSX.Element;
    templates?: <U extends D, UC extends C>(data: U, others?: SP & {
        components?: UC;
    }, ...tmpls: Template.Func[]) => JSX.Element;
}) => T extends 'noRef' ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
declare type ForwardRefSFC = <T, P = {}>(displayName?: string) => DefineComponent<T, P>;
interface SFC {
    <P = {}>(displayName?: string): DefineComponent<'noRef', P>;
    forwardRef?: ForwardRefSFC;
    component?: DefineComponent<'noRef', {}>;
}

declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;
declare const component: DefineComponent<"noRef", {}>;

export default sfc;
export { DefineComponent, ForwardRefSFC, SFC, SFCInnerProps, SFCProps, Template, component, forwardRef, isTemplate };
