import { Func, NoRef } from './utils';
import { ViewData } from './viewData';

export type CreateUseViewDataFunc<Ref = NoRef, P = {}> = <
  H extends Ref extends NoRef
    ? (props: React.PropsWithChildren<P>, ...args: any) => ViewData
    : (props: React.PropsWithChildren<P>, ref?: React.Ref<Ref>, ...args: any) => ViewData
>(
  hook: H
) => H;

export interface CreateForwardRefUseViewData<Ref = unknown> extends CreateUseViewDataFunc<Ref> {
  <Ref = unknown, P = {}>(): CreateUseViewDataFunc<Ref, P>;
}

export interface CreateUseViewData extends CreateUseViewDataFunc {
  <P = {}>(): CreateUseViewDataFunc<NoRef, P>;
  forwardRef: CreateForwardRefUseViewData;
}

function setUseViewDataHookName(hook: Func) {
  return hook.name ? hook : Object.defineProperty(hook, 'name', { value: 'useViewData' });
}

function createHookFunc() {
  return (hook?: Func) => (hook ? setUseViewDataHookName(hook) : (hook: Func) => setUseViewDataHookName(hook));
}

export const createUseViewData: CreateUseViewData = Object.assign(createHookFunc(), {
  forwardRef: createHookFunc()
}) as any;

export * from './viewData';
