import React from 'react';
import SearchTypeOption from './search-type-option/SearchTypeOption';
import './SearchType.css';

interface ISearchType {
  icon: string;
  value: string;
  id: string;
}

interface ISearchTypes {
  searchTypes: ISearchType[];
}

export default function SearchType({ searchTypes }: ISearchTypes): JSX.Element {
  return (
    <div className="SearchBar__SearchType">
      {searchTypes.map(({ icon, value, id }) => (
        <SearchTypeOption id={id} value={value} icon={icon} key={id} />
      ))}
    </div>
  );
}
