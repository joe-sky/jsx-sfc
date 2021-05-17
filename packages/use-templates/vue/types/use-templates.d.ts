/*!
 * use-templates v1.3.1
 * (c) 2021-present Joe_Sky
 * Released under the MIT License.
 */
import { VNodeChild, VNode } from 'vue';

declare type JSXElements = VNodeChild;
interface Noop {
    (): any;
    [key: string]: any;
}

declare const templateElement: Noop;
declare function isTemplate(templateElement: any): templateElement is Template.EL;
declare const Template: <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render>(props: {
    name?: T;
    children: T['__required'];
}) => VNode;
declare namespace Template {
    interface Render<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
        (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]): JSXElements;
        render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => JSXElements;
        __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: unknown[]): JSXElements;
    }
    type EL = typeof templateElement;
}

declare type DefineTemplates = (...tmpls: Template.Render[]) => JSXElements;
declare function useTemplates(defineTemplates: DefineTemplates): (arg1?: unknown, arg2?: unknown, arg3?: unknown, arg4?: unknown, arg5?: unknown, ...args: unknown[]) => VNodeChild;

export default useTemplates;
export { DefineTemplates, Template, isTemplate };
