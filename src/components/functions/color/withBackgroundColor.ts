import withAddedProp from '@HOCs/withAddedProp';
import { MaterialColors } from '@enums/MaterialColors';

export interface IBackgroundColor extends IProps {
    bgColor?: MaterialColors;
}
export const withBackgroundColor = withAddedProp<IBackgroundColor, [string]>(
    'bgColor',
    prefix,
    'has-background'
);
export default withBackgroundColor;