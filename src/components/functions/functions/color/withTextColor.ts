import withAddedProp from '../../atoms/withAddedProp';
import { MaterialColors } from '../../enums/MaterialColors';

export interface ITextColorProp extends IProps {
    textColor?: MaterialColors;
}
const withTextColor = withAddedProp<ITextColorProp, [string]>(
    'textColor',
    prefix,
    'has-text'
);
export default withTextColor;
