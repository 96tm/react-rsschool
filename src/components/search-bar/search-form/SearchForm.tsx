import React from 'react';
import './SearchForm.css';
import SearchInput from '../search-input/SearchInput';
import SearchButton from '../search-button/SearchButton';
import SearchOptions from '../search-options/SearchOptions';
import SearchType from '../search-type/SearchType';

export default function SearchForm(): JSX.Element {
  const searchOptions = [
    {
      id: 'SearchBar__SearchOption-local',
      value: 'local',
      text: 'Search here',
    },
    { id: 'SearchBar__SearchOption-web', value: 'web', text: 'Search The Web' },
  ];
  const searchTypes = [
    {
      id: 'SearchType__SearchType-standard',
      value: 'standard',
      icon: '',
    },
    {
      id: 'SearchType__SearchType-image',
      value: 'image',
      icon: '',
    },
    {
      id: 'SearchType__SearchType-document',
      value: 'document',
      icon: '',
    },
    {
      id: 'SearchType__SearchType-video',
      value: 'video',
      icon: '',
    },
  ];
  return (
    <div className="SearchBar__SearchForm">
      <SearchInput />
      <SearchButton text="Search" />
      <SearchOptions options={searchOptions} />
      <SearchType searchTypes={searchTypes} />
    </div>
  );
}
