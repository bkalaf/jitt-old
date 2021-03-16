declare global {
    export type Unsubscribe = () => void;
    export type EventHandler = (...args: any[]) => void;
    export type Fn<T, U> = (x: T) => U;
    export type Writer<T> = [
        props: T,
        usedProps: string[],
        className: string[]
    ];
    export type WriterFunc<T> = (props: T) => Writer<T>;
    export interface IAria {
        'aria-describedby'?: string;
        'aria-controls'?: string;
        'aria-hidden'?: 'true' | 'false';
    }
    export interface IDatalist {
        'data-toggle'?: string;
        'data-target'?: string;
    }
    export interface IProps extends IAria, IDatalist {
        id?: string;
        children?: React.ReactChildren;
        className?: string;
    }
    export interface IDataType<
        T extends string,
        TType extends string,
        TBacking extends string
    > {
        _type: TType;
        _backing: TBacking;
        value: T;
    }

    export type GUID = IDataType<string, 'GUID', 'string'>;

    export type Qualifier = 'only' | 'until';
    export type Breakpoints =
        | 'mobile'
        | 'tablet'
        | 'touch'
        | 'desktop'
        | 'widescreen'
        | 'fullhd';
    export type Side = 't' | 'b' | 'l' | 'r';
    export type Sides = { [P in Side]?: boolean };
    export type Magnitude = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    export type GutterProp = [sides: Sides, mag?: Magnitude];

    export type OptionalResponsive<T> =
        | T
        | [prop: T, breakpoint?: Breakpoints, qualifier?: Qualifier];

    // BULMA: TYPOGRAPHY UTILTIES
    export type FontSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export type TextAlignment = 'left' | 'right' | 'centered' | 'justified';
    export type TextTransform =
        | 'capitalized'
        | 'lowercase'
        | 'uppercase'
        | 'italic';
    export type FontWeight =
        | 'bold'
        | 'semibold'
        | 'medium'
        | 'normal'
        | 'light';
    export type FontFamily =
        | 'sans-serif'
        | 'monospace'
        | 'primary'
        | 'secondary'
        | 'code';
    export interface IGutterProp extends IProps {
        margin?: GutterProp;
        padding?: GutterProp;
    }
    export type Sizes = 'small' | 'medium' | 'large';
    export type SizesPlusNormal = Sizes | 'normal';
    export type Predicate<T> = (x: T) => boolean;

    export function of<T extends IProps>(props: T): Writer<T>;
    export function put<T extends IProps>(classN: string): WriterFunc<T>;
    export function is<T extends IProps>(name: keyof T): WriterFunc<T>;
    export function has<T extends IProps>(name: keyof T): WriterFunc<T>;
    export function prefix<T extends IProps>(
        name: keyof T,
        prefix: string
    ): (props: T) => Writer<T>;
    export function flag<T extends IProps>(
        name: keyof T,
        classN: string
    ): (props: T) => Writer<T>;
    export function chain<T extends IProps>(
        func: WriterFunc<T>,
        w2: Writer<T>
    ): Writer<T>;
    export function reduce<T extends IProps>(
        ...funcs: WriterFunc<T>[]
    ): (props: T) => T;
    export function pipe<T extends IProps>(
        props: T
    ): (...funcs: WriterFunc<T>[]) => T;
    export function surround<T extends IProps>(
        name: keyof T,
        prefix: string,
        suffix: string
    ): (props: T) => Writer<T>;
    export function mediaQuery<T extends IProps>(
        name: keyof T,
        prefix: string
    ): (props: T) => Writer<T>;
    export function testIf<T extends IProps>(
        name: keyof T,
        predicate: (value: T[keyof T]) => boolean,
        func: (value: T[keyof T]) => string,
        fallback?: string
    ): WriterFunc<T>;
    export function apply<T extends IProps, TKey extends keyof T>(
        name: TKey,
        func: (value: T[TKey]) => string | undefined
    ): WriterFunc<T>;
    export function doNotRemove<T extends IProps>(
        writer: WriterFunc<T>
    ): WriterFunc<T>;
}

export const i = 1;
