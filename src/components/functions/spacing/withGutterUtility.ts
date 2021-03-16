function gutter([sides, mag]: GutterProp, kind?: 'm' | 'p') {
    if (!sides) {
        return [];
    }
    const keys = Object.keys(sides);
    const xSides =
        keys.includes('l') && keys.includes('r')
            ? 'x'
            : keys.filter((x) => x === 'l' || x === 'r').join('');
    const ySides =
        keys.includes('t') && keys.includes('b')
            ? 'y'
            : keys.filter((x) => x === 't' || x === 'b').join('');
    const final = xSides === 'x' && ySides === 'y' ? '' : `${xSides}${ySides}`;
    return [`${kind}${final}${mag ? ['-', mag].join('') : ''}`];
}

export default function withGutterUtility<T extends IProps>(
    name: keyof IGutterProp,
    kind: 'm' | 'p'
) {
    return function (props: T & IGutterProp) {
        const { [name]: value, ...spread } = props;
        return [
            spread,
            [name],
            gutter(value! as GutterProp, kind),
        ] as Writer<T>;
    };
}
