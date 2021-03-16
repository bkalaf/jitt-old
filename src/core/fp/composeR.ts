import { Fn } from '@HOCs/functions/color/withTextColor';

export function composeR<T, U, V>(f: Fn<T, U>, g: Fn<U, V>): Fn<T, V> {
    return function (item: T) {
        return g(f(item));
    };
}
