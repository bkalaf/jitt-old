import withAddedProp from '@HOCs/withAddedProp';

export interface ITextTransformProp extends IProps {
    textTransform?: TextTransform;
}
const withTextTransform = withAddedProp<ITextTransformProp, []>(
    'textTransform',
    is
);

export default withTextTransform;