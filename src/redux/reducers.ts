import { combineReducers, Reducer } from 'redux';
import { LIMIT } from '../shared/constants';
import SortType from '../shared/models/sort-type';
import SortOrder from '../shared/models/sort-order';
import { IPhoto } from '../shared/models/photo';
import IAction from './models/action';
import ActionType from './models/action-type';

const limitReducer: Reducer<number, IAction<number>> = (
  state = LIMIT,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeLimit:
      return action.payload;
    default:
      return state;
  }
};

const errorReducer: Reducer<string, IAction<string>> = (state = '', action) => {
  switch (action.type) {
    case ActionType.ChangeError:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer: Reducer<number, IAction<number>> = (
  state = 1,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeCurrentPage:
      return Math.max(1, action.payload);
    default:
      return state;
  }
};

const numberOfPagesReducer: Reducer<number, IAction<number>> = (
  state = 1,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeNumberOfPages:
      return Math.max(1, action.payload);
    default:
      return state;
  }
};

const sortTypeReducer: Reducer<SortType, IAction<SortType>> = (
  state = SortType.datePosted,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeSortType:
      return action.payload;
    default:
      return state;
  }
};

const sortOrderReducer: Reducer<SortOrder, IAction<SortOrder>> = (
  state = SortOrder.desc,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeSortOrder:
      return action.payload;
    default:
      return state;
  }
};

const loadingStatusReducer: Reducer<boolean, IAction<boolean>> = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionType.ChangeLoadingStatus:
      return action.payload;
    default:
      return state;
  }
};

const photosReducer: Reducer<IPhoto[], IAction<IPhoto[]>> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ActionType.ChangePhotos:
      return action.payload;
    default:
      return state;
  }
};

const lastSearchInputReducer: Reducer<string, IAction<string>> = (
  state = '',
  action
) => {
  switch (action.type) {
    case ActionType.ChangeLastSearchInput:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  limit: limitReducer,
  error: errorReducer,
  currentPage: currentPageReducer,
  numberOfPages: numberOfPagesReducer,
  sortType: sortTypeReducer,
  sortOrder: sortOrderReducer,
  loadingStatus: loadingStatusReducer,
  photos: photosReducer,
  lastSearchInput: lastSearchInputReducer,
});

export default rootReducer;
