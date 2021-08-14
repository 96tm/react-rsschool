import React, { useContext } from 'react';
import './sorting.css';
import AppContext, { IHandleSortClick } from '../../../../shared/app-context';
import SortType from '../../../../shared/models/sort-type';

export default function Sorting(): JSX.Element {
  const { sortType, sortOrder } = useContext(AppContext);
  const handleSortClick = useContext(AppContext)
    .handleSortClick as IHandleSortClick;

  return (
    <div className="sorting">
      <span className="sort-title">Sort by: </span>
      <div className="buttons">
        <button
          type="button"
          className={`sort-date-posted sort-option button ${
            sortType === SortType.datePosted ? `active ${sortOrder}` : ''
          }`}
          onClick={() => handleSortClick(SortType.datePosted)}
        >
          date posted
        </button>
        <button
          type="button"
          className={`sort-date-taken sort-option button ${
            sortType === SortType.dateTaken ? `active ${sortOrder}` : ''
          }`}
          onClick={() => handleSortClick(SortType.dateTaken)}
        >
          date taken
        </button>
        <button
          type="button"
          className={`sort-interestingness sort-option button ${
            sortType === SortType.interesting ? `active ${sortOrder}` : ''
          }`}
          onClick={() => handleSortClick(SortType.interesting)}
        >
          interestingness
        </button>
      </div>
    </div>
  );
}
