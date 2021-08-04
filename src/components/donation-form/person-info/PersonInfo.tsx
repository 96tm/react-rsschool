import React from 'react';
import './PersonInfo.css';

export default function PersonInfo(): JSX.Element {
  return (
    <div className="PersonInfo">
      <label htmlFor="Donation__name" className="Donation__name-label">
        <span className="blue">*</span> Name:
        <input
          type="text"
          id="Donation__name"
          className="Donation__name"
          placeholder="First and last name"
        />
      </label>
      <label htmlFor="Donation__email" className="Donation__email-label">
        <span className="blue">*</span> Email:
        <input
          type="text"
          id="Donation__name"
          className="Donation__email"
          placeholder="Your email"
        />
      </label>
    </div>
  );
}
