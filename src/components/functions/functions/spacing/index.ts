import { composeR } from '@fp/';
import withMargin from './withMargin';
import withPadding from './withPadding';

const withSpacingUtilities = composeR(withMargin, withPadding);
export default withSpacingUtilities;