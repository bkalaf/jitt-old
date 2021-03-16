import withAddedProp from '../../atoms/withAddedProp';
import { MaterialColors } from '../../enums/MaterialColors';

export interface IBackgroundColor extends IProps {
    bgColor?: MaterialColors;
}
const withBackgroundColor = withAddedProp<IBackgroundColor, [string]>(
    'bgColor',
    prefix,
    'has-background'
);
export default withBackgroundColor;