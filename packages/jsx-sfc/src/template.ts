import { ReactNode } from 'react';
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
  T extends Template.Func<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Func
>(props: {
  name?: T;
  children: T['__required'];
}) => JSXElements = templateElement;

export namespace Template {
  export interface Func<Arg1 = unknown, Arg2 = unknown, Arg3 = unknown, Arg4 = unknown, Arg5 = unknown> {
    __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: unknown[]): ReactNode;
    template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: unknown[]) => ReactNode;
    Template: FC<Arg1>;
  }

  export type FC<P = {}> = (props: P, context?: any) => JSXElements;

  export type EL = typeof templateElement;

  export type Data = Obj;

  export type InternalFunc = <D extends Data>(data?: D) => D;
}
