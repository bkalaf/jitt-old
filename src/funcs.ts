import { isNotUndef } from '@core/isUndef';
import toText from '@core/toText';

export function of(props: IProps) {
    const { className, ...rest } = props;
    return [rest, [], className ? [className] : []];
}
export function put<T extends IProps>(classN: string) {
    return (props: T): Writer<T> => {
        return [props, [], [classN]];
    };
}
export function prefix<T extends IProps>(name: keyof T, prefix: string) {
    return (props: T): Writer<T> => {
        const { [name]: value, ...spread } = props;
        const cn = value ? [[prefix, value].join('-')] : [];
        return [spread as T, [name as string], cn];
    };
}

export function surround<T extends IProps>(
    name: keyof T,
    prefix: string,
    suffix: string
) {
    return (props: T): Writer<T> => {
        const { [name]: value, ...spread } = props;
        const cn = value ? [[prefix, value, suffix].join('-')] : [];
        return [spread as T, [name as string], cn];
    };
}
export function optMediaQuery<T extends IProps>(name: keyof T, pre: string) {
    return <U>(props: T): Writer<T> => {
        const { [name]: x, ...spread } = props;
        const value = (x as any) as OptionalResponsive<U>;
        if (Array.isArray(value)) {
            const [propValue, propBP, propQualify] = value;
            const s = [pre, propValue, propBP, propQualify]
                .filter(isNotUndef)
                .map(toText)
                .join('-');
            return [spread as T, [toText(name)], [s]];
        } else {
            return prefix(name, pre)(props);
        }
    };
}
export function flag<T extends IProps>(name: keyof T, classN: string) {
    return (props: T) => {
        const { [name]: value, ...spread } = props;
        const cn = value ? [classN] : [];
        return [spread, [name], cn] as Writer<T>;
    };
}
export function chain<T extends IProps>(func: WriterFunc<T>, w2: Writer<T>) {
    const [p, r, cn] = w2;
    const [p2, r2, cn2] = func(p);
    return [p2, [...r, ...r2], [...cn, ...cn2]] as Writer<T>;
}
export function reduce<T extends IProps>(...funcs: WriterFunc<T>[]) {
    return function (props: T) {
        const reduced = funcs.reduce((pv, cv) => (x: T) => chain(cv, pv(x)));
        const [p, r, cn] = reduced(props);
        const className = cn.join(' ');
        // const newProps = { ...p, ...toRemove, ...{ className } };
        const descriptors = Object.getOwnPropertyDescriptors({
            ...p,
            ...{ className },
        });
        const newProps = Object.keys(descriptors)
            .filter((n) => !r.includes(n))
            .map((n) => ({ [n]: descriptors[n] }))
            .reduce((pv, cv) => ({ ...pv, ...cv }), {});
        return Object.create(null, newProps);
    };
}

export function pipe<T extends IProps>(props: T) {
    return (...funcs: WriterFunc<T>[]): T => {
        return reduce(...funcs)(props);
    };
}

export function testIf<T extends IProps>(
    name: keyof T,
    predicate: (value: T[keyof T]) => boolean,
    func: (value: T[keyof T]) => string,
    fallback?: string
) {
    return function (props: T) {
        function inner() {
            if (predicate(value)) {
                return [func(value)];
            } else {
                return fallback ? fallback : [];
            }
        }
        const { [name]: value, ...spread } = props;
        return [spread, [name], inner()] as Writer<T>;
    };
}
function apply<T extends IProps, TKey extends keyof T>(
    name: TKey,
    func: (value: T[TKey]) => string | undefined
) {
    return function (props: T) {
        const { [name]: value, ...spread } = props;
        const className = func(value);
        return [props, [name], className ? [className] : []] as Writer<T>;
    };
}
function doNotRemove<T extends IProps>(writer: WriterFunc<T>): WriterFunc<T> {
    return (props: T) => {
        const [p, _n, cn] = writer(props);
        return [p, [], cn];
    };
}
window.pipe = pipe;
window.put = put;
window.prefix = prefix;
window.flag = flag;
window.reduce = reduce;
window.surround = surround;
window.mediaQuery = optMediaQuery;
window.is = <T extends IProps>(name: keyof T) => prefix(name, 'is');
window.has = <T extends IProps>(name: keyof T) => prefix(name, 'has');
window.testIf = testIf;
window.apply = apply;
window.doNotRemove = doNotRemove;