import React, { ChangeEvent, useState } from 'react';
import './SearchLocation.css';

interface ISearchLocation {
  text: string;
  value: string;
  id: string;
}

interface ISearchLocations {
  searchLocations: ISearchLocation[];
}

interface ISearchLocationState {
  searchLocation: string;
}

export default function SearchLocation({
  searchLocations,
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
      {searchLocations.map((location) => {
        const locationId = `SearchBar__SearchLocation-${location.id}`;
        return (
          <label
            htmlFor={locationId}
            className="SearchBar__SearchLocationLabel"
            key={locationId}
          >
            <input
              type="radio"
              name="SearchLocation"
              value={location.value}
              className="SearchBar__SearchLocationOption"
              id={locationId}
              key={locationId}
              checked={state.searchLocation === location.value}
              onChange={handleChange}
            />
            {location.text}
          </label>
        );
      })}
    </div>
  );
}
