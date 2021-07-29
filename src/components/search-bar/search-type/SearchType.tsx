import React from 'react';
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
      {searchTypes.map((searchType) => (
        <input
          type="radio"
          name="SearchType"
          value={searchType.value}
          className="SearchBar__SearchType"
          id={searchType.id}
          style={{
            background: `no-repeat ${searchType.icon}`,
          }}
        />
      ))}
    </div>
  );
}
