import withAddedProp from '@atoms/withAddedProp';

export interface IFontSizeProp extends IProps {
    fontSize?: OptionalResponsive<FontSize>;
}
export const withFontSize = withAddedProp<IFontSizeProp, [string]>(
    'fontSize',
    mediaQuery,
    'is-size'
);
export default withFontSize;