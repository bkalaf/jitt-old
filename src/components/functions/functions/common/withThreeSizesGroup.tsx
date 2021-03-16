import { IThreeSizeProp } from '@hocs/common/withThreeSizes';
import withAddedProp from '@atoms/withAddedProp';

export default withAddedProp<IThreeSizeProp, [string]>(
    'size',
    prefix,
    'are'
);
