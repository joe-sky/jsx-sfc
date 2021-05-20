import { noop, Obj, JSXElements } from './utils';

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
}) => JSXElements = templateElement;

export namespace Template {
  export interface Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
    (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]): JSXElements;
    render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
    __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: any[]): JSXElements;
    /**
     * @deprecated Please use `render`
     */
    template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
  }

  /**
   * @deprecated Please use `Template.Render`
   */
  export type Func<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = Render<Arg1, Arg2, Arg3, Arg4, Arg5>;

  export type EL = typeof templateElement;

  export type ComponentData = Obj;

  export type InternalFunc = <D extends ComponentData>(data?: D) => D;
}
