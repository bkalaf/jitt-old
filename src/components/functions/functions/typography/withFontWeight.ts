import withAddedProp from '@atoms/withAddedProp';

export interface IFontWeightProp extends IProps {
    fontWeight?: FontWeight;
}
const withFontWeight = withAddedProp<IFontWeightProp, [string]>(
    'fontWeight',
    prefix,
    'has-text-weight'
);
export default withFontWeight;
