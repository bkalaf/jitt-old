import { composeR } from '@fp/';
import withBackgroundColor from './withBackgroundColor';
import withTextColor from './withTextColor';

const withColorUtilities = composeR(withBackgroundColor, withTextColor);
export default withColorUtilities;
