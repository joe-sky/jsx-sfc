import { AttributeDelegate, Fragment } from '../interface';

export type AttributeResult<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = (
  arg1?: Arg1,
  arg2?: Arg2,
  arg3?: Arg3,
  arg4?: Arg4,
  arg5?: Arg5,
  ...args: any[]
) => {
  [name: string]: any;
};

let __attrNum = 0;

export const NT_ATTR = '__ntAttr__';

export function defineAttribute<
  Arg1 = any,
  Arg2 = any,
  Arg3 = any,
  Arg4 = any,
  Arg5 = any,
  HResult = any,
  HFragment = Fragment
>(delegate: AttributeDelegate<HResult, HFragment>): AttributeResult<Arg1, Arg2, Arg3, Arg4, Arg5> {
  const attrNum = __attrNum++;

  return (...args) => {
    const attr = [delegate, args];

    return {
      __nt__: attr,
      [NT_ATTR + attrNum]: attr
    };
  };
}
