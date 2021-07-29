import React from 'react';
import './SearchBar.css';
import SearchForm from './search-form/SearchForm';

export default function SearchBar(): JSX.Element {
  return (
    <div className="SearchBar">
      <SearchForm />
    </div>
  );
}
