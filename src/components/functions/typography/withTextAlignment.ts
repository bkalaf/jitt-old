import withAddedProp from '@HOCs/withAddedProp';

export interface ITextAlignment extends IProps {
    textAlignment?: OptionalResponsive<TextAlignment>;
}
export const withTextAlignment = withAddedProp<ITextAlignment, [string]>(
    'textAlignment',
    mediaQuery,
    'has-text'
);

export default withTextAlignment;