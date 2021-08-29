import ActionType from './models/action-type';
import IAction from './models/action';
import SortOrder from '../shared/models/sort-order';
import SortType from '../shared/models/sort-type';
import { IPhoto } from '../shared/models/photo';

export const changeError = (value: string): IAction<string> => ({
  type: ActionType.ChangeError,
  payload: value,
});
export const changeLastSearchInput = (value: string): IAction<string> => ({
  type: ActionType.ChangeLastSearchInput,
  payload: value,
});
export const changeLimit = (value: number): IAction<number> => ({
  type: ActionType.ChangeLimit,
  payload: value,
});
export const changeLoadingStatus = (value: boolean): IAction<boolean> => ({
  type: ActionType.ChangeLoadingStatus,
  payload: value,
});
export const changeSortOrder = (value: SortOrder): IAction<SortOrder> => ({
  type: ActionType.ChangeSortOrder,
  payload: value,
});
export const changeSortType = (value: SortType): IAction<SortType> => ({
  type: ActionType.ChangeSortType,
  payload: value,
});
export const changePhotos = (value: IPhoto[]): IAction<IPhoto[]> => ({
  type: ActionType.ChangePhotos,
  payload: value,
});
export const changeCurrentPage = (value: number): IAction<number> => ({
  type: ActionType.ChangeCurrentPage,
  payload: value,
});
export const changeNumberOfPages = (value: number): IAction<number> => ({
  type: ActionType.ChangeNumberOfPages,
  payload: value,
});
