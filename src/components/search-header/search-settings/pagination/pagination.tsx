import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './pagination.css';
import PagesList from './pages-list/pages-list';
import { Store } from '../../../../redux/store';
import { changeCurrentPage, changeLimit } from '../../../../redux/actions';

export default function Pagination(): JSX.Element {
  const { limit, currentPage, numberOfPages } = useSelector(
    (state: Store) => state
  );
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (Number.isInteger(value)) {
      dispatch(changeCurrentPage(value));
    } else {
      dispatch(changeCurrentPage(currentPage));
    }
  };
  const onLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLimit(parseInt(event.target.value, 10)));
  };
  return (
    <div className="pagination">
      <div className="input-container">
        <label
          htmlFor="number-of-items"
          className="number-of-items-label label"
        >
          Items per page
        </label>
        <select
          name="numberOfItems"
          id="number-of-items"
          className="number-of-items input"
          value={limit}
          onChange={onLimitChange}
        >
          {[20, 50, 100].map((number) => (
            <option value={number} key={`number-option-${number}`}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <div className="pages">
        <div className="input-container">
          <label htmlFor="current-page" className="current-page-label label">
            {'Current page: '}
          </label>
          <input
            type="number"
            name="currentPage"
            min="1"
            value={currentPage}
            max={numberOfPages}
            id="current-page-input"
            className="current-page-input input"
            onChange={handleChange}
            aria-label="current page input"
          />
        </div>
      </div>
      <PagesList />
    </div>
  );
}
