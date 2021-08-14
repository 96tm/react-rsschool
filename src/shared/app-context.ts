import React, { MouseEvent } from 'react';
import SortType from './models/sort-type';
import SortOrder from './models/sort-order';

export interface IHandleSearchClick {
  (text: string, event: MouseEvent<HTMLButtonElement>): void;
}

export interface IHandleSortClick {
  (sortType: SortType): void;
}

interface IAppContext {
  numberOfPages: number;
  sortType?: SortType;
  sortOrder?: SortOrder;
  handleSearchClick?: IHandleSearchClick;
  handleSortClick?: IHandleSortClick;
}

const AppContext = React.createContext<IAppContext>({
  numberOfPages: 0,
});

export default AppContext;
