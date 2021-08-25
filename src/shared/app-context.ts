import React, { ChangeEvent } from 'react';
import SortType from './models/sort-type';
import SortOrder from './models/sort-order';
import ApiService from './api-service';

export interface IHandleSearch {
  (text: string): void;
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

export interface IHandleSearchInputChange {
  (event: ChangeEvent<HTMLInputElement>): void;
}

export interface IAppContext {
  searchInput: string;
  limit: number;
  currentPage: number;
  numberOfPages: number;
  sortType?: SortType;
  sortOrder?: SortOrder;
  isLoading: boolean;
  apiService?: ApiService;
  handleSearch?: IHandleSearch;
  handleSortClick?: IHandleSortClick;
  handleLimitChange?: IHandleLimitChange;
  handlePageNumberChange?: IHandlePageNumberChange;
  handleSearchInputChange?: IHandleSearchInputChange;
}

const AppContext = React.createContext<IAppContext>({
  searchInput: '',
  limit: 0,
  currentPage: 0,
  numberOfPages: 0,
  isLoading: false,
});

export default AppContext;
