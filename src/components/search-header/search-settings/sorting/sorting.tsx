import React from 'react';
import './sorting.css';
import { useSelector, useDispatch } from 'react-redux';
import SortType from '../../../../shared/models/sort-type';
import { changeSortType, changeSortOrder } from '../../../../redux/actions';
import SortOrder from '../../../../shared/models/sort-order';
import { Store } from '../../../../redux/store';

export default function Sorting(): JSX.Element {
  const { sortType, sortOrder } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const handleSortClick = (newSortType: SortType) => {
    dispatch(changeSortType(newSortType));
    let newSortOrder;
    if (newSortType !== sortType) {
      newSortOrder = SortOrder.desc;
    } else {
      newSortOrder =
        sortOrder === SortOrder.asc ? SortOrder.desc : SortOrder.asc;
    }
    dispatch(changeSortOrder(newSortOrder));
  };

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
