import React from 'react';
import './CreditCard.css';

export default function CreditCard(): JSX.Element {
  return (
    <div className="CreditCard">
      <label
        htmlFor="CreditCard__card-number"
        className="CreditCard__card-number-label CreditCard__label"
      >
        <span className="blue">*</span> Credit Card Number
        <input
          type="text"
          className="CreditCard__card-number CreditCard__input"
        />
      </label>
      <label
        htmlFor="CreditCard__card-cvv"
        className="CreditCard__card-cvv-label CreditCard__label"
      >
        <span className="blue">*</span> CVV Number
        <input type="text" className="CreditCard__card-cvv CreditCard__input" />
      </label>
      <label
        htmlFor="CreditCard__card-month"
        className="CreditCard__card-month-label CreditCard__label"
      >
        <span className="blue">*</span> Expiration Date
        <div className="CreditCard__select-container">
          <select
            name="card-month"
            id="CreditCard__card-month"
            className="CreditCard__card-month CreditCard__input"
          >
            <option value="1">01</option>
          </select>
        </div>
      </label>
      <label
        htmlFor="CreditCard__card-year"
        className="CreditCard__card-year-label CreditCard__label"
      >
        <div className="CreditCard__select-container">
          <select
            name="card-year"
            id="CreditCard__card-year"
            className="CreditCard__card-year CreditCard__input"
          >
            <option value="2021">2021</option>
          </select>
        </div>
      </label>
    </div>
  );
}
