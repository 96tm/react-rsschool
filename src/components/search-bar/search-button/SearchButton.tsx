import React from 'react';
import './SearchButton.css';

export default function SearchButton({ text }: { text: string }): JSX.Element {
  return (
    <button type="button" className="SearchBar__SearchButton">
      {text}
    </button>
  );
}
