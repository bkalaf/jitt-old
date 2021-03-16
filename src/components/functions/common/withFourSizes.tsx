import withAddedProp from '@HOCs/withAddedProp';

export interface IFourSizeProp extends IProps {
    size?: SizesPlusNormal;
}

export default withAddedProp<IFourSizeProp, [string]>('size', prefix, 'is');
