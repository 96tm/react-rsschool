import React from 'react';
import './PersonInfo.css';

export default function PersonInfo(): JSX.Element {
  return (
    <div className="PersonInfo">
      <label
        htmlFor="PersonInfo__name"
        className="PersonInfo__name-label PersonInfo__label"
      >
        <span className="blue">*</span> Name:
        <input
          type="text"
          id="PersonInfo__name"
          className="PersonInfo__name PersonInfo__input"
          placeholder="First and last name"
        />
      </label>
      <label
        htmlFor="PersonInfo__email"
        className="PersonInfo__email-label PersonInfo__label"
      >
        <span className="blue">*</span> Email:
        <input
          type="text"
          id="PersonInfo__email"
          className="PersonInfo__email PersonInfo__input"
          placeholder="Your email"
        />
      </label>
      <label
        htmlFor="PersonInfo__date-of-birth"
        className="PersonInfo__date-of-birth-label PersonInfo__label"
      >
        <span className="blue">*</span> Date of birth:
        <input
          type="date"
          id="PersonInfo__date-of-birth"
          className="PersonInfo__date-of-birth PersonInfo__input"
        />
      </label>
    </div>
  );
}
