/*!
 * use-view-data v1.3.0-alpha.4
 * (c) 2021-present Joe_Sky
 * Released under the MIT License.
 */
declare type Obj = Record<string, unknown>;
declare type NoRef = 'noRef';

interface ViewData extends Obj {
}
declare type ViewDataType<H> = H extends (...args: any) => infer R ? (R extends ViewData ? R : never) : never;

declare type CreateUseViewDataFunc<Ref = NoRef, P = {}> = <H extends Ref extends NoRef ? (props: React.PropsWithChildren<P>, ...args: any) => ViewData : (props: React.PropsWithChildren<P>, ref?: React.Ref<Ref>, ...args: any) => ViewData>(hook: H) => H;
interface CreateForwardRefUseViewData<Ref = unknown> extends CreateUseViewDataFunc<Ref> {
    <Ref = unknown, P = {}>(): CreateUseViewDataFunc<Ref, P>;
}
interface CreateUseViewData extends CreateUseViewDataFunc {
    <P = {}>(): CreateUseViewDataFunc<NoRef, P>;
    forwardRef: CreateForwardRefUseViewData;
}
declare const createUseViewData: CreateUseViewData;

export { CreateForwardRefUseViewData, CreateUseViewData, CreateUseViewDataFunc, ViewData, ViewDataType, createUseViewData };
