import React, { useContext } from 'react';
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
  return (
    <div className="Pagination">
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
            {'Go to page: '}
          </label>
          <input
            type="number"
            name="currentPage"
            min="1"
            id="current-page-input"
            className="current-page-input input"
            onChange={handlePageNumberChange}
          />
        </div>
      </div>
      <PagesList numberOfPages={10} currentPage={1} />
    </div>
  );
}
