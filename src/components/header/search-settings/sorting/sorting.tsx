import React from 'react';
import './sorting.css';

export default function Sorting(): JSX.Element {
  return (
    <div className="sorting">
      <span className="title">Sort by: </span>
      <div className="buttons">
        <button type="button" className="sort-date sort-option button">
          date
        </button>
        <button type="button" className="sort-views sort-option button">
          id
        </button>
        <button type="button" className="sort-title sort-option button">
          title
        </button>
      </div>
    </div>
  );
}
