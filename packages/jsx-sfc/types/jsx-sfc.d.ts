/*!
 * jsx-sfc v1.7.0
 * (c) 2020-present Joe_Sky
 * Released under the MIT License.
 */
import React, { ReactElement, PropsWithChildren, PropsWithoutRef, RefAttributes, WeakValidationMap, ValidationMap } from 'react';

type Func = (...args: any) => any;
interface Noop {
    (): any;
    [key: string]: any;
}
declare const templateElement: Noop;

type Obj = Record<string, unknown>;
type FuncMap = Record<string, Func | Obj | undefined>;
type JSXElements = ReactElement<any, any> | null;
/**
 * UnionToIntersection<{ foo: string } | { bar: string }> =
 *  { foo: string } & { bar: string }.
 */
type UnionToIntersection<U> = (U extends unknown ? (arg: U) => 0 : never) extends (arg: infer I) => 0 ? I : never;
/**
 * LastInUnion<1 | 2> = 2.
 */
type LastInUnion<U> = UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never;
/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, Last>>, Last];
type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;
type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>] extends [
    ...infer Sum
] ? Sum['length'] : never;
type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest['length'] : never;
type GreaterThan<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends Num2 ? false : CountArr['length'] extends Num2 ? true : CountArr['length'] extends Num1 ? false : GreaterThan<Num1, Num2, [...CountArr, unknown]>;
type Defined<T> = T extends undefined ? never : T;

declare function isTemplate(templateElement: any): templateElement is Template.EL;
interface TemplateRender<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> {
    (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]): JSXElements;
    render: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
    __required(arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, ...args: any[]): JSXElements;
    /**
     * @deprecated Please use `render`
     */
    template: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4, arg5?: Arg5, ...args: any[]) => JSXElements;
}
declare const Template: <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render>(props: {
    name?: T;
    children: T['__required'];
}) => JSXElements;
declare namespace Template {
    type Render<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = TemplateRender<Arg1, Arg2, Arg3, Arg4, Arg5>;
    /**
     * @deprecated Please use `Template.Render`
     */
    type Func<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any> = Render<Arg1, Arg2, Arg3, Arg4, Arg5>;
    type EL = typeof templateElement;
}
declare const createTemplate: <U extends string[]>(...names: U) => (<Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T;
    children: T["__required"];
}) => JSXElements) & Record<U[number], <Arg1 = any, Arg2 = any, Arg3 = any, Arg4 = any, Arg5 = any, T extends Template.Render<Arg1, Arg2, Arg3, Arg4, Arg5> = Template.Render<any, any, any, any, any>>(props: {
    name?: T;
    children: T["__required"];
}) => JSXElements>;

type RowBorderLine = '------------|----------------';
type SplitParts<Parts> = UnionToTuple<keyof Parts> extends [...infer Arr] ? (Arr extends string[] ? Arr : never) : never;
type CheckType<T, U = unknown> = Defined<T> extends string ? '🅂' : Defined<T> extends number ? '🄽' : Defined<T> extends boolean ? '🄱' : Defined<T> extends Func & {
    withComponent: Func;
} ? '🅂🄲' : Defined<T> extends {
    name: string;
    styles: string;
    map?: string;
} ? '🄲' : Defined<T> extends Obj ? '🄾' : Defined<T> extends Func ? '🄵' : Defined<T> extends Array<U> ? '🄰' : '�';
type BuildOverview<Length extends number, Data extends Obj = {}, Styles extends Obj = {}, Static extends Obj = {}, DataRows extends string[] = SplitParts<Data>, StylesRows extends string[] = SplitParts<Styles>, StaticRows extends string[] = SplitParts<Static>, Table = {}, Count extends unknown[] = [], DataCount extends unknown[] = [], StylesCount extends unknown[] = [], StaticCount extends unknown[] = [], DataLineRendering extends boolean = false, StylesLineRendering extends boolean = false, AllRendered extends boolean = false> = AllRendered extends true ? Table : Count['length'] extends Length ? Table : BuildOverview<Length, Data, Styles, Static, DataRows, StylesRows, StaticRows, Table & {
    [key in `${GreaterThan<Count['length'], 8> extends false ? 0 : ''}${Add<Count['length'], 1>}|`]: Count['length'] extends 0 ? RowBorderLine : DataCount['length'] extends DataRows['length'] ? DataLineRendering extends true ? RowBorderLine : StylesCount['length'] extends StylesRows['length'] ? StylesLineRendering extends true ? RowBorderLine : StaticCount['length'] extends StaticRows['length'] ? RowBorderLine : ` ${StaticCount['length'] extends 0 ? `static(${StaticRows['length']})` : `         ${GreaterThan<StaticRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<StaticRows['length'], 9> extends false ? ' ' : ''} | ${Static[StaticRows[StaticCount['length']]] extends infer R ? CheckType<R> : never} ${StaticRows[StaticCount['length']]}` : ` ${StylesCount['length'] extends 0 ? `style(${StylesRows['length']})` : `        ${GreaterThan<StylesRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<StylesRows['length'], 9> extends false ? ' ' : ''}  | ${Styles[StylesRows[StylesCount['length']]] extends infer R ? CheckType<R> : never} ${StylesRows[StylesCount['length']]}` : ` ${DataCount['length'] extends 0 ? `data(${DataRows['length']})` : `       ${GreaterThan<DataRows['length'], 9> extends false ? '' : ' '}`}${GreaterThan<DataRows['length'], 9> extends false ? ' ' : ''}   | ${Data[DataRows[DataCount['length']]] extends infer R ? CheckType<R> : never} ${DataRows[DataCount['length']]}`;
}, [
    ...Count,
    unknown
], DataCount['length'] extends DataRows['length'] ? DataCount : Count['length'] extends 0 ? DataCount : [...DataCount, unknown], StylesCount['length'] extends StylesRows['length'] ? StylesCount : Count['length'] extends 0 ? StylesCount : DataCount['length'] extends DataRows['length'] ? DataLineRendering extends true ? StylesCount : [...StylesCount, unknown] : StylesCount, StaticCount['length'] extends StaticRows['length'] ? StaticCount : Count['length'] extends 0 ? StaticCount : DataCount['length'] extends DataRows['length'] ? DataLineRendering extends true ? StaticCount : StylesCount['length'] extends StylesRows['length'] ? StylesLineRendering extends true ? StaticCount : [...StaticCount, unknown] : StaticCount : StaticCount, DataCount['length'] extends Subtract<DataRows['length'], 1> ? true : false, StylesCount['length'] extends Subtract<StylesRows['length'], 1> ? true : false, DataCount['length'] extends DataRows['length'] ? StylesCount['length'] extends StylesRows['length'] ? StaticCount['length'] extends StaticRows['length'] ? true : false : false : false>;

type NoRef = 'noRef';
type OverviewMaxRows = 100;
type SFCProps<Props = {}, EX = {}> = PropsWithChildren<Props> & {
    props: PropsWithChildren<Props>;
    /**
     * @deprecated Please use `props`
     */
    originalProps: PropsWithChildren<Props>;
} & EX;
type PresetStatic<Props = {}> = Obj & {
    propTypes?: WeakValidationMap<Props>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<Props>;
    displayName?: string;
};
type ExtractOptions<T, Props = null> = T extends () => infer R ? R extends (Props extends null ? Obj : PresetStatic<Props>) ? R : never : T extends (Props extends null ? Obj : PresetStatic<Props>) ? T : never;
type DefineComponent<Ref = NoRef, Props = {}, ReturnComponent = Ref extends NoRef ? React.FC<Props> : React.ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<Ref>>, Origin = {
    Component: ReturnComponent;
}> = {
    <Data extends Obj, InferStyles extends ExtractOptions<Styles>, InferStatic extends ExtractOptions<Static, Props>, InferEX extends ExtractOptions<EX, Props>, FR extends {
        styles: InferStyles;
    } & InferStatic & InferEX, Styles = {}, Static = {}, EX = {}, BO = BuildOverview<OverviewMaxRows, Data, InferStyles, InferStatic>, Overview = UnionToTuple<keyof BO>['length'] extends 1 ? {} : {
        overview: {
            [key in keyof BO]: BO[key];
        };
    }>(options: {
        /**
         * Using the `Component function` to define actual component, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   Component: (props) => {
         *     useEffect(() => console.log(props.user), []);
         *     return { user: props.user };
         *   },
         *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => Data : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => Data;
        /**
         * Using the `template function` to return JSX elements, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   template: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
         *   Component: (props) => {
         *     useEffect(() => console.log(props.user), []);
         *     return { user: props.user };
         *   },
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        template?: <U extends Data>(args: {
            data: U;
            props: PropsWithChildren<Props>;
        } & FR, ...tmpls: Template.Render[]) => JSXElements;
        /**
         * Using the `render function` to return JSX elements, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   Component: (props) => {
         *     useEffect(() => console.log(props.user), []);
         *     return { user: props.user };
         *   },
         *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        render?: <U extends Data>(args: {
            data: U;
            props: PropsWithChildren<Props>;
        } & FR, ...tmpls: Template.Render[]) => JSXElements;
        /**
         * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `Emotion`)
         */
        styles?: Styles;
        /**
         * Using the `static property or function` to define any static members of a component, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   Component: (props) => {
         *     useEffect(() => console.log(props.user), []);
         *     return { user: props.user || props.initialValue };
         *   },
         *   static: { initialValue: 'test user', defaultProps: { user: 'test' } },
         *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        static?: Static;
        /**
         * @deprecated Please use `static`
         */
        options?: Static;
    }, extensions?: EX): Overview & ReturnComponent & Origin & {
        template: {
            (data?: Partial<Data>): JSXElements;
            __componentData: Data;
        };
        Render: (data?: Partial<Data>) => JSXElements;
        styles: InferStyles;
    } & ExtractOptions<Static, Props> & ExtractOptions<EX, Props>;
    <InferStyles extends ExtractOptions<Styles>, InferStatic extends ExtractOptions<Static, Props>, InferEX extends ExtractOptions<EX, Props>, FR extends {
        styles: InferStyles;
    } & InferStatic & InferEX, Styles = {}, Static = {}, EX = {}, BO = BuildOverview<OverviewMaxRows, {}, InferStyles, InferStatic>, Overview = UnionToTuple<keyof BO>['length'] extends 1 ? {} : {
        overview: {
            [key in keyof BO]: BO[key];
        };
    }>(options: {
        /**
         * Using the `Component function` to define actual component, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   Component: ({ user, styles: { Wrapper } }) => {
         *     useEffect(() => console.log(user), []);
         *     return <Wrapper>{user}</Wrapper>;
         *   },
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        Component: Ref extends NoRef ? (props: SFCProps<Props, FR>, context?: any) => JSXElements : (props: SFCProps<Props, FR>, ref: React.Ref<Ref>) => JSXElements;
        /**
         * Using the `styles property or function` to define styles, you can use the most popular `CSS in JS` solutions. (e.g. `styled-components`, `emotion`)
         */
        styles?: Styles;
        /**
         * Using the `static property or function` to define any static members of a component, example:
         * ```tsx
         * const App = sfc<{ user: string }>()({
         *   Component: (props) => {
         *     useEffect(() => console.log(props.user), []);
         *     return { user: props.user || props.initialValue };
         *   },
         *   static: { initialValue: 'test user', defaultProps: { user: 'test' } },
         *   render: ({ data, styles: { Wrapper } }) => <Wrapper>{data.user}</Wrapper>,
         *   styles: { Wrapper: styled.div`font-size:14px` }
         * });
         * ```
         */
        static?: Static;
        /**
         * @deprecated Please use `static`
         */
        options?: Static;
    }, extensions?: EX): Overview & ReturnComponent & Origin & {
        styles: InferStyles;
    } & ExtractOptions<Static, Props> & ExtractOptions<EX, Props>;
    <InferEX extends ExtractOptions<EX, Props>, EX = {}>(component: Ref extends NoRef ? (props: SFCProps<Props, InferEX>, context?: any) => JSXElements : (props: SFCProps<Props, InferEX>, ref: React.Ref<Ref>) => JSXElements, extensions?: EX): ReturnComponent & Origin & ExtractOptions<EX, Props>;
};
interface ForwardRefSFC<Ref = unknown> extends DefineComponent<Ref> {
    <Ref = unknown, Props = {}>(): DefineComponent<Ref, Props>;
}
interface SFC extends DefineComponent {
    <Props = {}>(): DefineComponent<NoRef, Props>;
    forwardRef: ForwardRefSFC;
    createOptions: (options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) => Obj;
}
interface SFCOptions {
    template?: Func;
    render?: Func;
    Component: Func;
    styles?: Func | Obj;
    static?: Func | Obj;
    /**
     * @deprecated Please use `static`
     */
    options?: Func | Obj;
}
type SFCExtensions = Func | Obj;
type ComponentDataType<C> = C extends {
    template: infer T;
} ? T extends {
    (...args: any): any;
    __componentData: infer D;
} ? D : never : never;

declare function createOptions(options: FuncMap, extensions?: SFCExtensions): Obj;
declare const sfc: SFC;
declare const forwardRef: ForwardRefSFC;

export default sfc;
export { type ComponentDataType, type DefineComponent, type ForwardRefSFC, type SFC, type SFCExtensions, type SFCOptions, type SFCProps, Template, type TemplateRender, createOptions, createTemplate, forwardRef, isTemplate };
