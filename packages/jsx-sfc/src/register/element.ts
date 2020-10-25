import { ElementDelegate, Childrenable, Fragment } from '../interface';

export function isEl(type: any): type is ElementDelegate {
  return (type as ElementDelegate)?.__nt__;
}

export function defineElement<ElFunc extends (props: Childrenable) => JSX.Element, HResult = any, HFragment = Fragment>(
  delegate: ElementDelegate<HResult, HFragment>
): ElFunc;
export function defineElement<ElProps extends {}, HResult = any, HFragment = Fragment>(
  delegate: ElementDelegate<HResult, HFragment>
): (props: ElProps & Childrenable) => JSX.Element;
export function defineElement(delegate: ElementDelegate) {
  delegate.__nt__ = true;

  return delegate as any;
}
