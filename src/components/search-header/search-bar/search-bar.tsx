import React, {
  useContext,
  MouseEvent,
  FormEvent,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import './search-bar.css';
import logo from 'public/assets/icons/logo.png';
import AppContext, { IHandleSearch } from '../../../shared/app-context';

interface ISearchBarProps {
  handleSettingsClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBar({
  handleSettingsClick,
}: ISearchBarProps): JSX.Element {
  const handleSearch = useContext(AppContext).handleSearch as IHandleSearch;

  const { searchInput: contextSearchInput } = useContext(AppContext);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchInput(contextSearchInput);
  }, []);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSearch(searchInput);
  };

  const { isLoading } = useContext(AppContext);

  return (
    <form className="search-bar" action="#" onSubmit={handleSubmit}>
      <a href="https://flickr.com" className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <input
        type="text"
        className="search-input search-control"
        value={searchInput}
        onChange={handleSearchInputChange}
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
