import React from 'react';
import './SearchTypeOption.css';

interface ISearchTypeOption {
  icon: string;
  value: string;
  id: string;
}

export default function SearchTypeOption({
  icon,
  value,
  id,
}: ISearchTypeOption): JSX.Element {
  return (
    <label
      htmlFor={id}
      className="SearchBar__SearchTypeOptionContainer"
      style={{
        backgroundImage: `url(${icon})`,
      }}
    >
      <input
        type="radio"
        name="SearchType"
        value={value}
        className="SearchBar__SearchTypeOption"
        id={id}
      />
    </label>
  );
}
