import withAddedProp from '@atoms/withAddedProp';

export interface IFourSizeProp extends IProps {
    size?: SizesPlusNormal;
}

export default withAddedProp<IFourSizeProp, [string]>('size', prefix, 'is');
