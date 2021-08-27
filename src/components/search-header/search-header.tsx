import React, { useState } from 'react';
import './search-header.css';
import SearchBar from './search-bar/search-bar';
import SearchSettings from './search-settings/search-settings';

export default function SearchHeader(): JSX.Element {
  const [settingsShown, setSettingsShown] = useState(false);

  const handleSettingsClick = () =>
    setSettingsShown((previousSettingsShown) => !previousSettingsShown);

  return (
    <header className="search-header">
      <div className="search-header-container">
        <SearchBar handleSettingsClick={handleSettingsClick} />
        {settingsShown && <SearchSettings />}
      </div>
    </header>
  );
}
