import React, { useContext, MouseEvent, ChangeEvent } from 'react';
import './search-bar.css';
import logo from 'public/assets/icons/logo.svg';
import AppContext from '../../../shared/app-context';

interface ISearchBarProps {
  searchBarInput: string;
  handleSearchBarChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSettingsClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBar({
  searchBarInput,
  handleSearchBarChange,
  handleSettingsClick,
}: ISearchBarProps): JSX.Element {
  const handleSearchClick = useContext(AppContext).handleSearchClick as (
    text: string,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  return (
    <div className="SearchBar">
      <img src={logo} alt="Logo" className="logo" />
      <input
        type="text"
        className="search-input search-control"
        value={searchBarInput}
        onChange={handleSearchBarChange}
      />
      <button
        type="button"
        className="button-search button search-control"
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          handleSearchClick(searchBarInput, event)
        }
      >
        Search
      </button>
      <button
        type="button"
        className="button-search-settings button search-control"
        onClick={handleSettingsClick}
      >
        {' '}
      </button>
    </div>
  );
}
