import { noop, JSXElements } from './utils';
import { VNode } from 'vue';

const __TEMPLATE__ = 0x5fc;

const templateElement = noop;
templateElement.__type = __TEMPLATE__;

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
  children: T['__required'];
}) => VNode = templateElement;

export namespace Template {
  export interface Render<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
    (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]): JSXElements;
    render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => JSXElements;
    __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: unknown[]): JSXElements;
  }

  export type EL = typeof templateElement;
}
