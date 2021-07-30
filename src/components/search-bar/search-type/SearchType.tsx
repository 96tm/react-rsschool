import React, { useState, ChangeEvent } from 'react';
import SearchTypeOption from './search-type-option/SearchTypeOption';
import './SearchType.css';

interface ISearchType {
  icon: string;
  value: string;
  id: string;
}

interface ISearchTypeState {
  searchType: string;
}

interface ISearchTypes {
  searchTypes: ISearchType[];
}

export default function SearchType({ searchTypes }: ISearchTypes): JSX.Element {
  const [state, setState] = useState<ISearchTypeState>({
    searchType: 'standard',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      searchType: event.target.value,
    });
  };
  return (
    <div className="SearchBar__SearchType">
      {searchTypes.map(({ icon, value, id }) => {
        const typeId = `SearchType__SearchType-${id}`;
        return (
          <SearchTypeOption
            id={typeId}
            value={value}
            icon={icon}
            key={typeId}
            checked={value === state.searchType}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}
