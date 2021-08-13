import React, { ChangeEvent, useState } from 'react';
import './header.css';
import SearchBar from './search-bar/search-bar';
import SearchSettings from './search-settings/search-settings';

interface IHeaderState {
  searchBarInput: string;
  settingsShown: boolean;
}

export default function Header(): JSX.Element {
  const [state, setState] = useState<IHeaderState>({
    searchBarInput: '',
    settingsShown: false,
  });

  const handleSearchBarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState((previousState) => ({ ...previousState, searchBarInput: value }));
  };

  const handleSettingsClick = () =>
    setState((previousState) => ({
      ...previousState,
      settingsShown: !previousState.settingsShown,
    }));

  return (
    <header className="Header">
      <div className="header-container">
        <SearchBar
          searchBarInput={state.searchBarInput}
          handleSearchBarChange={handleSearchBarChange}
          handleSettingsClick={handleSettingsClick}
        />
        {state.settingsShown && <SearchSettings />}
      </div>
    </header>
  );
}
