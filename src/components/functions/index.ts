import withColorUtilities, { withColor } from './color';
import withFourSizes from './common/withFourSizes';
import withThreeSizes from './common/withThreeSizes';
import withThreeSizesGroup from './common/withThreeSizesGroup';
import withOtherUtility from './other';
import composeFuncComponent from './other/composeK';
import withSpacingUtilities from './spacing';
import withTypographyUtilities from './typography';

const withAllBulmaUtilities = composeFuncComponent(
    withOtherUtility,
    composeFuncComponent(
        withColorUtilities,
        composeFuncComponent(withSpacingUtilities, withTypographyUtilities)
    )
);

const hocs: { 
    composePure: typeof composeFuncComponent,
    with: {
        bulmaUtility: {
            all: typeof withAllBulmaUtilities,
            other: typeof withOtherUtility,
            typography: typeof withTypographyUtilities,
            spacing: typeof withSpacingUtilities,
            color: {
                bgAndText: typeof withColorUtilities,
                self: typeof withColor
            },
            size: {
                3: typeof withThreeSizes,
                group3: typeof withThreeSizesGroup,
                4: typeof withFourSizes
            }
        }
    }
} = {
    composePure: composeFuncComponent,
    with: {
        bulmaUtility: {
            all: withAllBulmaUtilities,
            other: withOtherUtility,
            typography: withTypographyUtilities,
            spacing: withSpacingUtilities,
            color: {
                self: withColor,
                bgAndText: withColorUtilities
            },
            size: {
                3: withThreeSizes,
                4: withFourSizes,
                group3: withThreeSizesGroup
            }
        }
    }
}

export default hocs;