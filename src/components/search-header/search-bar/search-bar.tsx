import React, {
  MouseEvent,
  FormEvent,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './search-bar.css';
import logo from 'public/assets/icons/logo.png';
import { changeLastSearchInput } from '../../../redux/actions';
import { Store } from '../../../redux/store';

interface ISearchBarProps {
  handleSettingsClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBar({
  handleSettingsClick,
}: ISearchBarProps): JSX.Element {
  const { lastSearchInput, loadingStatus: isLoading } = useSelector(
    (state: Store) => state
  );
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchInput(lastSearchInput);
  }, []);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(changeLastSearchInput(searchInput));
  };

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
        aria-label="search input"
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
        aria-label="toggle settings"
      >
        {' '}
      </button>
    </form>
  );
}
