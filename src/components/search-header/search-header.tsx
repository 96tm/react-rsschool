import React, { useState } from 'react';
import './search-header.css';
import SearchBar from './search-bar/search-bar';
import SearchSettings from './search-settings/search-settings';

interface ISearchHeaderState {
  settingsShown: boolean;
}

export default function SearchHeader(): JSX.Element {
  const [state, setState] = useState<ISearchHeaderState>({
    settingsShown: false,
  });

  const handleSettingsClick = () =>
    setState((previousState) => ({
      ...previousState,
      settingsShown: !previousState.settingsShown,
    }));

  return (
    <header className="search-header">
      <div className="search-header-container">
        <SearchBar handleSettingsClick={handleSettingsClick} />
        {state.settingsShown && <SearchSettings />}
      </div>
    </header>
  );
}
