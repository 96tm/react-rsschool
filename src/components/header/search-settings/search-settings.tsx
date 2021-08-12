import React from 'react';
import './search-settings.css';
import Sorting from './sorting/sorting';
import Pagination from './pagination/pagination';

export default function SearchSettings(): JSX.Element {
  return (
    <div className="SearchSettings">
      <Sorting />
      <Pagination />
    </div>
  );
}
