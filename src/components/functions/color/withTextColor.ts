import { MaterialColors } from '@enums/MaterialColors';
import withAddedProp from '@HOCs/withAddedProp';

export interface ITextColorProp extends IProps {
    textColor?: MaterialColors;
}
const withTextColor = withAddedProp<ITextColorProp, [string]>(
    'textColor',
    prefix,
    'has-text'
);
export default withTextColor;

