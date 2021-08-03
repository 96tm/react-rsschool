import React, { ChangeEvent } from 'react';
import './SearchTypeOption.css';

interface ISearchTypeOption {
  icon: string;
  value: string;
  id: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchTypeOption({
  icon,
  value,
  id,
  handleChange,
  checked = false,
}: ISearchTypeOption): JSX.Element {
  return (
    <label htmlFor={id} className="SearchBar__SearchTypeOptionContainer">
      <input
        type="radio"
        name="SearchType"
        value={value}
        className="SearchBar__SearchTypeOption"
        checked={checked}
        id={id}
        onChange={handleChange}
      />
      <span
        className="SearchBar__SearchTypeOptionIcon"
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
    </label>
  );
}
