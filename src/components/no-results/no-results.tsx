import React from 'react';
import './no-results.css';
import notFound from 'public/assets/icons/not-found.svg';

export default function NoResults(): JSX.Element {
  return (
    <div className="no-results">
      <div className="no-results-content">
        <img src={notFound} alt="No results" className="no-results-image" />
        <p className="no-results-text">Nothing found</p>
      </div>
    </div>
  );
}
