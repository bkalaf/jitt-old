import withAddedProp from '@atoms/withAddedProp';

export interface IFontFamilyProp extends IProps {
    fontFamily?: FontFamily;
}
const withFontFamily = withAddedProp<IFontFamilyProp, [string]>(
    'fontFamily',
    prefix,
    'is-family'
);
export default withFontFamily;