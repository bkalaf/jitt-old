import { IThreeSizeProp } from '@HOCs/common/withThreeSizes';
import withAddedProp from '@HOCs/withAddedProp';

export default withAddedProp<IThreeSizeProp, [string]>(
    'size',
    prefix,
    'are'
);
