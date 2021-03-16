import composeK from '../../../fp/composeK';
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
].reduce((pv, cv) => composeK(pv, cv));

export default withOtherUtility;