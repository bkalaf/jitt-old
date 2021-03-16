import fromOtherUtility from './fromOtherUtility';

const withClearFix = fromOtherUtility('clearfix', 'is-clearfix');
const withPulledLeft = fromOtherUtility('pulledLeft', 'is-pulled-left');
const withPulledRight = fromOtherUtility('pulledRight', 'is-pulled-right');
const withOverlay = fromOtherUtility('overlay', 'is-overlay');
const withClipped = fromOtherUtility('clipped', 'is-clipped');
const withHasNoRadius = fromOtherUtility('hasNoRadius', 'is-radiusless');
const withHasNoShadows = fromOtherUtility('hasNoShadows', 'is-shadowless');
const withUnselectable = fromOtherUtility('unselectable', 'is-unselectable');
const withClickable = fromOtherUtility('clickable', 'is-clickable');
const withRelative = fromOtherUtility('relative', 'is-relative');

const withOtherUtility = [
    withClearFix,
    withPulledLeft,
    withClipped,
    withClickable,
    withUnselectable,
    withRelative,
    withPulledRight,
    withHasNoRadius,
    withHasNoShadows,
    withOverlay,
].reduce((pv, cv) => composeFuncComponent(pv, cv));

export default withOtherUtility;

function composeFuncComponent(pv: <T extends IProps>(Component: import("react").FunctionComponent<T>) => import("react").FunctionComponent<T & import("./fromOtherUtility").IOtherUtilityProps>, cv: <T extends IProps>(Component: import("react").FunctionComponent<T>) => import("react").FunctionComponent<T & import("./fromOtherUtility").IOtherUtilityProps>): <T extends IProps>(Component: import("react").FunctionComponent<T>) => import("react").FunctionComponent<T & import("./fromOtherUtility").IOtherUtilityProps> {
    throw new Error('Function not implemented.');
}
