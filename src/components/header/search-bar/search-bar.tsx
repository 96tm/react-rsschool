import React from 'react';
import './search-bar.css';
import logo from 'public/assets/icons/logo.svg';

export default function SearchBar(): JSX.Element {
  return (
    <div className="SearchBar">
      <img src={logo} alt="Logo" className="logo" />
      <input type="text" className="search-input search-control" />
      <button type="button" className="button-search button search-control">
        Search
      </button>
      <button
        type="button"
        className="button-search-settings button search-control"
      >
        {' '}
      </button>
    </div>
  );
}
