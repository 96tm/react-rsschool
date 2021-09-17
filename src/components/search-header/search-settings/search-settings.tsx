import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../redux/store';
import Sorting from './sorting/sorting';
import Pagination from './pagination/pagination';
import './search-settings.css';

export default function SearchSettings(): JSX.Element {
  const isLoading = useSelector((state: Store) => state.loadingStatus);
  return (
    <div className="search-settings">
      <div className={`${isLoading ? 'disabled' : ''}`}>
        <Sorting />
        <Pagination />
      </div>
    </div>
  );
}
