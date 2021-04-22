type ViewData = Record<string, unknown>;

export type ViewDataType<H> = H extends (...args: any) => infer R ? (R extends ViewData ? Partial<R> : never) : never;

type CreateUseViewDataFunc<P = {}> = <H extends (props?: React.PropsWithChildren<P>, context?: any) => ViewData>(
  hook: H
) => H;

interface CreateUseViewData extends CreateUseViewDataFunc {
  <P = {}>(): CreateUseViewDataFunc<P>;
}

type HookFunc = (...args: any) => any;

function setUseViewDataHookName(hook: HookFunc) {
  return Object.defineProperty(hook, 'name', { value: 'useViewData' });
}

export const createUseViewData: CreateUseViewData = (hook?: HookFunc) =>
  hook ? setUseViewDataHookName(hook) : (hook: HookFunc) => setUseViewDataHookName(hook);
