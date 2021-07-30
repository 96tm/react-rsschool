import React from 'react';
import './SearchForm.css';
import SearchButton from '../search-button/SearchButton';
import SearchInputFieldset from '../search-input-fieldset/SearchInputFieldset';

export default function SearchForm(): JSX.Element {
  return (
    <div className="SearchBar__SearchForm">
      <SearchInputFieldset />
      <SearchButton text="Search" />
    </div>
  );
}
