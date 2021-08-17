import React from 'react';
import './loader.css';

export default function Loader(): JSX.Element {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader" />
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
