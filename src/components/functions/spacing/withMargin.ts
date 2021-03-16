import withAddedProp from '@HOCs/withAddedProp';
import withGutterUtility from './withGutterUtility';

export interface IMarginProp extends IProps {
    margin?: GutterProp;
}
const withMargin = withAddedProp<IMarginProp, ['m' | 'p']>(
    'margin',
    withGutterUtility,
    'm'
);
export default withMargin