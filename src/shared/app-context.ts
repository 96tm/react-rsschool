import React, { MouseEvent, ChangeEvent } from 'react';
import SortType from './models/sort-type';
import SortOrder from './models/sort-order';

export interface IHandleSearchClick {
  (text: string, event: MouseEvent<HTMLButtonElement>): void;
}

export interface IHandleSortClick {
  (sortType: SortType): void;
}

export interface IHandleLimitChange {
  (event: ChangeEvent<HTMLSelectElement>): void;
}

export interface IHandlePageNumberChange {
  (event: ChangeEvent<HTMLInputElement>): void;
}

interface IAppContext {
  numberOfPages: number;
  sortType?: SortType;
  sortOrder?: SortOrder;
  handleSearchClick?: IHandleSearchClick;
  handleSortClick?: IHandleSortClick;
  handleLimitChange?: IHandleLimitChange;
  handlePageNumberChange?: IHandlePageNumberChange;
}

const AppContext = React.createContext<IAppContext>({
  numberOfPages: 0,
});

export default AppContext;
