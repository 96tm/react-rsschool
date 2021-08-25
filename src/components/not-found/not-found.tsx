import React from 'react';
import './not-found.css';
import notFound from 'public/assets/icons/not-found.svg';

export default function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <img src={notFound} alt="Not found" className="not-found-image" />
        <p className="not-found-text">Nothing found</p>
      </div>
    </div>
  );
}
