export function compl<T>(p1: Predicate<T>) {
    return function (item: T) {
        return !p1(item);
    };
}
