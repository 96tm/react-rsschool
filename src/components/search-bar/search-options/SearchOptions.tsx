import React from 'react';
import './SearchOptions.css';

interface ISearchOption {
  text: string;
  value: string;
  id: string;
}

interface ISearchOptions {
  options: ISearchOption[];
}

export default function SearchOptions({
  options,
}: ISearchOptions): JSX.Element {
  return (
    <div className="SearchBar__SearchOptions">
      {options.map((option) => (
        <label
          htmlFor={option.id}
          className="SearchBar__SearchOptionLabel"
          key={option.id}
        >
          <input
            type="radio"
            name="SearchOption"
            value={option.value}
            className="SearchBar__SearchOption"
            id={option.id}
            key={option.id}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}
