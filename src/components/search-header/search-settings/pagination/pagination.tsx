import React, { useContext, ChangeEvent } from 'react';
import './pagination.css';
import PagesList from './pages-list/pages-list';
import AppContext, {
  IHandleLimitChange,
  IHandlePageNumberChange,
} from '../../../../shared/app-context';

export default function Pagination(): JSX.Element {
  const handleLimitChange = useContext(AppContext)
    .handleLimitChange as IHandleLimitChange;
  const handlePageNumberChange = useContext(AppContext)
    .handlePageNumberChange as IHandlePageNumberChange;
  const { currentPage, numberOfPages, limit } = useContext(AppContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (Number.isInteger(value)) {
      handlePageNumberChange(value);
    } else {
      handlePageNumberChange(currentPage);
    }
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
          onChange={handleLimitChange}
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
          />
        </div>
      </div>
      <PagesList />
    </div>
  );
}
