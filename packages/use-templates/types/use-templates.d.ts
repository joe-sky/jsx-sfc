/*!
 * use-templates v1.3.6
 * (c) 2021-present Joe_Sky
 * Released under the MIT License.
 */
import { ReactElement } from 'react';

interface Noop {
    (): any;
    [key: string]: any;
}
declare const templateElement: Noop;

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
}
declare namespace Template {
    type Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = TemplateRender<Arg1, Arg2, Arg3, Arg4, Arg5>;
    type EL = typeof templateElement;
}
declare const createTemplate: <U extends string[]>(...names: U) => (<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T | undefined;
    children: T["__required"];
}) => JSXElements) & Record<U[number], <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T | undefined;
    children: T["__required"];
}) => JSXElements>;

declare type DefineTemplates = (...tmpls: Template.Render[]) => JSXElements;
declare function useTemplates(defineTemplates: DefineTemplates): JSXElements;

export default useTemplates;
export { DefineTemplates, Template, TemplateRender, createTemplate, isTemplate };
