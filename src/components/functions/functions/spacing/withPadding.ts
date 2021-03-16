import withAddedProp from '../../atoms/withAddedProp';
import withGutterUtility from './withGutterUtility';

export interface IPaddingProp extends IProps {
    padding?: GutterProp;
}
const withPadding = withAddedProp<IPaddingProp, ['m' | 'p']>(
    'padding',
    withGutterUtility,
    'p'
);
export default withPadding;