/*!
 * use-view-data v1.3.0-alpha.2
 * (c) 2021-present Joe_Sky
 * Released under the MIT License.
 */
declare type ViewData = Record<string, unknown>;
declare type ViewDataType<H> = H extends (...args: any) => infer R ? (R extends ViewData ? Partial<R> : never) : never;
declare type CreateUseViewDataFunc<P = {}> = <H extends (props?: React.PropsWithChildren<P>, context?: any) => ViewData>(hook: H) => H;
interface CreateUseViewData extends CreateUseViewDataFunc {
    <P = {}>(): CreateUseViewDataFunc<P>;
}
declare const createUseViewData: CreateUseViewData;

export { ViewDataType, createUseViewData };
