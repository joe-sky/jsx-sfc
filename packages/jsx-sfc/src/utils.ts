import { ReactElement } from 'react';
import { Func } from 'use-templates/src/shared';

export type Obj = Record<string, unknown>;

export type FuncMap = Record<string, Func | Obj | undefined>;

export type JSXElements = ReactElement<any, any> | null;

/**
 * UnionToIntersection<{ foo: string } | { bar: string }> =
 *  { foo: string } & { bar: string }.
 */
export type UnionToIntersection<U> = (U extends unknown ? (arg: U) => 0 : never) extends (arg: infer I) => 0
  ? I
  : never;

/**
 * LastInUnion<1 | 2> = 2.
 */
export type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never;

/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last];

export type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length
  ? Arr
  : BuildArray<Length, Ele, [...Arr, Ele]>;

export type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>] extends [
  ...infer Sum // 此处必须使用infer，否则在赋给有number参数约束的泛型中会报错类型错误
]
  ? Sum['length']
  : never;

export type Subtract<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest['length'] : never;

export type GreaterThan<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends Num2
  ? false
  : CountArr['length'] extends Num2
    ? true
    : CountArr['length'] extends Num1
      ? false
      : GreaterThan<Num1, Num2, [...CountArr, unknown]>;

export function isFunc(value: any): value is Func {
  return typeof value === 'function';
}

export function withOrigin(component: Func) {
  return Object.defineProperty(component, 'Component', {
    get() {
      return component;
    },
    enumerable: true,
    configurable: true
  });
}

export * from 'use-templates/src/shared';
