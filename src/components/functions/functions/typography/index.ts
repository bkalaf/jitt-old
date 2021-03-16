import { composeR } from '@fp/';
import withFontFamily from './withFontFamily';
import withFontSize from './withFontSize';
import withFontWeight from './withFontWeight';
import withTextAlignment from './withTextAlignment';
import withTextTransform from './withTextTransform';

const withTypographyUtilities = composeR(
    withFontFamily,
    composeR(
        withFontWeight,
        composeR(withTextAlignment, composeR(withTextTransform, withFontSize))
    )
);
export default withTypographyUtilities;
