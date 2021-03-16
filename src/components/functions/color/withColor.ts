import withAddedProp from '@HOCs/withAddedProp';
import { MaterialColors } from '../../enums/MaterialColors';

export interface IColorProp extends IProps {
    color?: MaterialColors;
}

export const withColor = withAddedProp<IColorProp, [string]>(
    'color',
    prefix,
    'is'
);
export default withColor;
