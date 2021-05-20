/*!
 * use-templates v1.3.4
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
    __children: T['__required'];
    children?: T['__required'];
}) => VNode;
declare namespace Template {
    interface Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
        (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]): JSXElements;
        render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
        __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: any[]): JSXElements;
    }
    type EL = typeof templateElement;
}

declare type DefineTemplates = (...tmpls: Template.Render[]) => JSXElements;
declare function useTemplates(defineTemplates: DefineTemplates): (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, ...args: any[]) => VNodeChild;

export default useTemplates;
export { DefineTemplates, Template, isTemplate };
