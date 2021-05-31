import { JSXElements, __TEMPLATE__, templateElement, buildCreateTemplate } from './utils';
import { VNode } from 'vue';

export function isTemplate(templateElement: any): templateElement is Template.EL {
  return templateElement.__type === __TEMPLATE__;
}

export const Template: <
  Arg1 = any,
  Arg2 = any,
  Arg3 = any,
  Arg4 = any,
  Arg5 = any,
  T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render
>(props: {
  name?: T;
  __children: T['__required'];
  children?: T['__required'];
}) => VNode = templateElement;

export interface TemplateRender<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
  (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]): JSXElements;
  render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
  __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: any[]): JSXElements;
}

export namespace Template {
  export type Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = TemplateRender<
    Arg1,
    Arg2,
    Arg3,
    Arg4,
    Arg5
  >;

  export type EL = typeof templateElement;
}

export const createTemplate = buildCreateTemplate(Template);
