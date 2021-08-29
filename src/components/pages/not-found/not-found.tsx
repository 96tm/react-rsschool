import React from 'react';
import './not-found.css';

export default function NotFound(): JSX.Element {
  return (
    <div className="page page-not-found">
      <p className="not-found-message">
        404 <br /> Nothing found...
      </p>
    </div>
  );
}
