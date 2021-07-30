import React from 'react';
import './SearchInputFieldset.css';
import SearchInput from '../search-input/SearchInput';
import SearchOptions from '../search-options/SearchOptions';

export default function SearchInputFieldset(): JSX.Element {
  return (
    <div className="SearchBar__SearchInputFieldset">
      <SearchInput />
      <SearchOptions />
    </div>
  );
}
