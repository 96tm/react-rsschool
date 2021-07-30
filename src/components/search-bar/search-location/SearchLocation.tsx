import React, { ChangeEvent, useState } from 'react';
import './SearchLocation.css';

interface ISearchLocation {
  text: string;
  value: string;
  id: string;
}

interface ISearchLocations {
  options: ISearchLocation[];
}

interface ISearchLocationState {
  searchLocation: string;
}

export default function SearchLocation({
  options,
}: ISearchLocations): JSX.Element {
  const [state, setState] = useState<ISearchLocationState>({
    searchLocation: 'local',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      searchLocation: event.target.value,
    });
  };
  return (
    <div className="SearchBar__SearchLocation">
      {options.map((option) => (
        <label
          htmlFor={option.id}
          className="SearchBar__SearchLocationLabel"
          key={option.id}
        >
          <input
            type="radio"
            name="SearchLocation"
            value={option.value}
            className="SearchBar__SearchLocationOption"
            id={option.id}
            key={option.id}
            checked={state.searchLocation === option.value}
            onChange={handleChange}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}
