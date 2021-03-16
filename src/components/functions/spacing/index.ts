import { composeR } from '@core/fp/composeR';
import withMargin from './withMargin';
import withPadding from './withPadding';

const withSpacingUtilities = composeR(withMargin, withPadding);
export default withSpacingUtilities;