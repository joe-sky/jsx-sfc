import { DelegateOption, Props, Children } from './interface';

export function adjustChildren(children: Children, option?: DelegateOption, lazy?: boolean) {
  if (children.length === 1) {
    const child = children[0];
    if (lazy && typeof child === 'function') {
      return child();
    }

    return child;
  } else {
    const {
      h,
      hOption: { Fragment }
    } = option;

    if (Fragment) {
      return h(Fragment, null, ...children);
    } else {
      return children;
    }
  }
}

export function renderPrevAttr(props: Props, children: Children, option: DelegateOption) {
  const { prevDelegates, h, type } = option;
  const prevDelegate = prevDelegates.pop();

  if (prevDelegate && 'delegate' in prevDelegate) {
    return prevDelegate.delegate(props, children, { ...option, args: prevDelegate.args });
  } else {
    return h(type, props, ...children);
  }
}

export function as<R, T = any>(value: T): R {
  return (value as T | R) as R;
}
