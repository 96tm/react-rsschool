import React from 'react';
import './header.css';
import SearchBar from './search-bar/search-bar';
import SearchSettings from './search-settings/search-settings';

export default function Header(): JSX.Element {
  return (
    <header className="Header">
      <div className="header-container">
        <SearchBar />
        <SearchSettings />
      </div>
    </header>
  );
}
