import React, { MouseEvent, ChangeEvent } from 'react';
import SortType from './models/sort-type';
import SortOrder from './models/sort-order';

export interface IHandleSearch {
  (text: string, event: MouseEvent<HTMLButtonElement>): void;
}

export interface IHandleSortClick {
  (sortType: SortType): void;
}

export interface IHandleLimitChange {
  (event: ChangeEvent<HTMLSelectElement>): void;
}

export interface IHandlePageNumberChange {
  (page: number): void;
}

interface IAppContext {
  currentPage: number;
  numberOfPages: number;
  sortType?: SortType;
  sortOrder?: SortOrder;
  isLoading: boolean;
  handleSearch?: IHandleSearch;
  handleSortClick?: IHandleSortClick;
  handleLimitChange?: IHandleLimitChange;
  handlePageNumberChange?: IHandlePageNumberChange;
}

const AppContext = React.createContext<IAppContext>({
  currentPage: 0,
  numberOfPages: 0,
  isLoading: false,
});

export default AppContext;
