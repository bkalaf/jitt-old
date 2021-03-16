import hocs from '..';
import withBackgroundColor from './withBackgroundColor';
import withTextColor from './withTextColor';
export * from './withColor';

const withColorUtilities = hocs.composePure(withBackgroundColor, withTextColor);
export default withColorUtilities;
