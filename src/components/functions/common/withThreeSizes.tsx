import withAddedProp from '@HOCs/withAddedProp';

export interface IThreeSizeProp extends IProps {
    size?: Sizes;
}
export default withAddedProp<IThreeSizeProp, [string]>('size', prefix, 'is');
