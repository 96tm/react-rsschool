import React from 'react';
import './SearchInput.css';

export default function SearchInput(): JSX.Element {
  return (
    <div className="SearchBar__SearchInputWrap">
      <input type="text" className="SearchBar__SearchInput" />
    </div>
  );
}
