import React, { useContext } from 'react';
import './search-settings.css';
import Sorting from './sorting/sorting';
import Pagination from './pagination/pagination';
import AppContext from '../../../shared/app-context';

export default function SearchSettings(): JSX.Element {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="search-settings">
      <div className={`${isLoading ? 'disabled' : ''}`}>
        <Sorting />
        <Pagination />
      </div>
    </div>
  );
}
