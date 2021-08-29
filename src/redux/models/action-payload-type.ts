import SortType from '../../shared/models/sort-type';
import SortOrder from '../../shared/models/sort-order';
import { IPhoto } from '../../shared/models/photo';

type ActionPayloadType =
  | string
  | number
  | SortType
  | SortOrder
  | boolean
  | IPhoto[];
export default ActionPayloadType;
