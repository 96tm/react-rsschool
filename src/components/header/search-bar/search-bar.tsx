import React, { useContext, MouseEvent, ChangeEvent, FormEvent } from 'react';
import './search-bar.css';
import logo from 'public/assets/icons/logo.png';
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
  const handleSearch = useContext(AppContext).handleSearch as (
    text: string
  ) => void;

  const handleSubmit = (event: FormEvent) => {
    handleSearch(searchBarInput);
    event.preventDefault();
  };

  const { isLoading } = useContext(AppContext);

  return (
    <form className="search-bar" action="#" onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" className="logo" />
      <input
        type="text"
        className="search-input search-control"
        value={searchBarInput}
        onChange={handleSearchBarChange}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="button-search button search-control"
        disabled={isLoading}
      >
        Search
      </button>
      <button
        type="button"
        className="button-search-settings button search-control"
        onClick={handleSettingsClick}
        disabled={isLoading}
      >
        {' '}
      </button>
    </form>
  );
}
