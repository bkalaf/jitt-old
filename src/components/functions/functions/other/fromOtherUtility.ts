import withAddedProp from '@atoms/withAddedProp';

export interface IOtherUtilityProps extends IProps {
    clearfix?: boolean;
    pulledLeft?: boolean;
    pulledRight?: boolean;
    overlay?: boolean;
    clipped?: boolean;
    hasNoRadius?: boolean;
    hasNoShadows?: boolean;
    unselectable?: boolean;
    clickable?: boolean;
    relative?: boolean;
}

export default function fromOtherUtility(
    propName: keyof IOtherUtilityProps,
    className: string
) {
    return withAddedProp<IOtherUtilityProps, [string]>(
        propName,
        flag,
        className
    );
}
