import { Func, Obj, FuncMap, JSXElements, UnionToTuple, GreaterThan, Add } from './utils';

type SplitParts<Parts> =
  UnionToTuple<keyof Parts> extends [...infer Arr] ? (Arr extends string[] ? Arr : never) : never;

type CheckType<T> = T extends string
  ? '🅂'
  : T extends number
    ? '🄽'
    : T extends boolean
      ? '🄱'
      : T extends Func & { withComponent: Func }
        ? '🅂🄲'
        : T extends { name: string; styles: string; map?: string }
          ? '🄲'
          : T extends Obj
            ? '🄾'
            : T extends Func
              ? '🄵'
              : '';

export type BuildOverview<
  Length extends number,
  Data extends Obj = {},
  Styles extends Obj = {},
  Static extends Obj = {},
  StaticRows extends string[] = SplitParts<Static>,
  Table = {},
  Count extends unknown[] = []
> = Count['length'] extends Length
  ? Table
  : BuildOverview<
      Length,
      Data,
      Styles,
      Static,
      StaticRows,
      Table & {
        [key in `${GreaterThan<Count['length'], 8> extends false ? 0 : ''}${Add<Count['length'], 1>}|`]: ` data(2)   | ${Static[StaticRows[Count['length']]] extends infer R
          ? CheckType<R>
          : never} ${StaticRows[Count['length']]}`;
      },
      [...Count, unknown]
    >;
