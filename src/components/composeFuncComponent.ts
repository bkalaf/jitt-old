import React from 'react';

export default function composeFuncComponent<T extends IProps, U, V>(
    f: Fn<React.FunctionComponent<T>, React.FunctionComponent<U>>,
    g: Fn<React.FunctionComponent<U>, React.FunctionComponent<V>>
) {
    return (item: React.FunctionComponent<T>) => g(f(item));
}
