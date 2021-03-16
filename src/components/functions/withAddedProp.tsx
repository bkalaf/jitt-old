import React from 'react';

export default function withAddedProp<U extends IProps, V extends any[]>(
    propName: keyof U,
    handler: <T extends IProps>(
        propName: keyof U,
        ...rest: V
    ) => (props: T) => Writer<T & U>,
    ...args: V
) {
    return function <T extends IProps>(
        Component: React.FunctionComponent<T>
    ): React.FunctionComponent<T & U> {
        return function (props: T & U) {
            return (
                <Component
                    {...pipe(props)(handler(propName, ...args))}></Component>
            );
        };
    };
}
