import { Obj } from './utils';

export interface ViewData extends Obj {}

export type ViewDataType<H> = H extends (...args: any) => infer R ? (R extends ViewData ? R : never) : never;
