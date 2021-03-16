import { composeK } from '@fp/';
import withColorUtilities from './color';
import withOtherUtility from './other';
import withSpacingUtilities from './spacing';
import withTypographyUtilities from './typography';

const withAllBulmaUtilities = composeK(
    withOtherUtility,
    composeK(
        withColorUtilities,
        composeK(withSpacingUtilities, withTypographyUtilities)
    )
);
export default withAllBulmaUtilities;
