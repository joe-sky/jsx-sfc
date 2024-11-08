import { Func, Obj, UnionToTuple, Defined, GreaterThan, Add, Subtract } from './utils';

type RowBorderLine = '------------|----------------';

type SplitParts<Parts> =
  UnionToTuple<keyof Parts> extends [...infer Arr] ? (Arr extends string[] ? Arr : never) : never;

type CheckType<T, U = unknown> =
  Defined<T> extends string
    ? '🅂'
    : Defined<T> extends number
      ? '🄽'
      : Defined<T> extends boolean
        ? '🄱'
        : Defined<T> extends Func & { withComponent: Func }
          ? '🅂🄲'
          : Defined<T> extends { name: string; styles: string; map?: string }
            ? '🄲'
            : Defined<T> extends Obj
              ? '🄾'
              : Defined<T> extends Func
                ? '🄵'
                : Defined<T> extends Array<U>
                  ? '🄰'
                  : '�';

export type BuildOverview<
  Length extends number,
  Data extends Obj = {},
  Styles extends Obj = {},
  Static extends Obj = {},
  DataRows extends string[] = SplitParts<Data>,
  StylesRows extends string[] = SplitParts<Styles>,
  StaticRows extends string[] = SplitParts<Static>,
  Table = {},
  Count extends unknown[] = [],
  DataCount extends unknown[] = [],
  StylesCount extends unknown[] = [],
  StaticCount extends unknown[] = [],
  DataLineRendering extends boolean = false,
  StylesLineRendering extends boolean = false,
  AllRendered extends boolean = false
> = AllRendered extends true
  ? Table
  : Count['length'] extends Length
    ? Table
    : BuildOverview<
        Length,
        Data,
        Styles,
        Static,
        DataRows,
        StylesRows,
        StaticRows,
        Table & {
          [key in `${GreaterThan<Count['length'], 8> extends false ? 0 : ''}${Add<Count['length'], 1>}|`]: Count['length'] extends 0
            ? RowBorderLine
            : DataCount['length'] extends DataRows['length']
              ? DataLineRendering extends true
                ? RowBorderLine
                : StylesCount['length'] extends StylesRows['length']
                  ? StylesLineRendering extends true
                    ? RowBorderLine
                    : StaticCount['length'] extends StaticRows['length']
                      ? RowBorderLine
                      : ` ${StaticCount['length'] extends 0 ? `static(${StaticRows['length']})` : `         ${GreaterThan<StaticRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<StaticRows['length'], 9> extends false ? ' ' : ''} | ${Static[StaticRows[StaticCount['length']]] extends infer R
                          ? CheckType<R>
                          : never} ${StaticRows[StaticCount['length']]}`
                  : ` ${StylesCount['length'] extends 0 ? `style(${StylesRows['length']})` : `        ${GreaterThan<StylesRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<StylesRows['length'], 9> extends false ? ' ' : ''}  | ${Styles[StylesRows[StylesCount['length']]] extends infer R
                      ? CheckType<R>
                      : never} ${StylesRows[StylesCount['length']]}`
              : ` ${DataCount['length'] extends 0 ? `data(${DataRows['length']})` : `       ${GreaterThan<DataRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<DataRows['length'], 9> extends false ? ' ' : ''}   | ${Data[DataRows[DataCount['length']]] extends infer R
                  ? CheckType<R>
                  : never} ${DataRows[DataCount['length']]}`;
        },
        [...Count, unknown],
        DataCount['length'] extends DataRows['length']
          ? DataCount
          : Count['length'] extends 0
            ? DataCount
            : [...DataCount, unknown],
        StylesCount['length'] extends StylesRows['length']
          ? StylesCount
          : Count['length'] extends 0
            ? StylesCount
            : DataCount['length'] extends DataRows['length']
              ? DataLineRendering extends true
                ? StylesCount
                : [...StylesCount, unknown]
              : StylesCount,
        StaticCount['length'] extends StaticRows['length']
          ? StaticCount
          : Count['length'] extends 0
            ? StaticCount
            : DataCount['length'] extends DataRows['length']
              ? DataLineRendering extends true
                ? StaticCount
                : StylesCount['length'] extends StylesRows['length']
                  ? StylesLineRendering extends true
                    ? StaticCount
                    : [...StaticCount, unknown]
                  : StaticCount
              : StaticCount,
        DataCount['length'] extends Subtract<DataRows['length'], 1> ? true : false,
        StylesCount['length'] extends Subtract<StylesRows['length'], 1> ? true : false,
        DataCount['length'] extends DataRows['length']
          ? StylesCount['length'] extends StylesRows['length']
            ? StaticCount['length'] extends StaticRows['length']
              ? true
              : false
            : false
          : false
      >;
