import React from 'react';
import './Donation.css';
import CreditCard from '../credit-card/CreditCard';
import PersonInfo from '../person-info/PersonInfo';

export default function Donation(): JSX.Element {
  return (
    <div className="Donation">
      <p className="Donation__title">
        <span className="blue">*</span> Choose your donation amount:
      </p>
      <div className="Donation__Values">
        <label
          htmlFor="Donation__value-option-10"
          className="Donation__value-option-label"
        >
          10
          <input
            type="radio"
            value="10"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-10"
          />
          <div className="Donation__overlay" />
        </label>
        <label
          htmlFor="Donation__value-option-20"
          className="Donation__value-option-label"
        >
          20
          <input
            type="radio"
            value="20"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-20"
          />
          <div className="Donation__overlay" />
        </label>
        <label
          htmlFor="Donation__value-option-30"
          className="Donation__value-option-label"
        >
          30
          <input
            type="radio"
            value="30"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-30"
          />
          <div className="Donation__overlay" />
        </label>
        <label
          htmlFor="Donation__value-option-50"
          className="Donation__value-option-label"
        >
          50
          <input
            type="radio"
            value="50"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-50"
          />
          <div className="Donation__overlay" />
        </label>
        <label
          htmlFor="Donation__value-option-80"
          className="Donation__value-option-label"
        >
          80
          <input
            type="radio"
            value="80"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-80"
          />
          <div className="Donation__overlay" />
        </label>
        <label
          htmlFor="Donation__value-option-100"
          className="Donation__value-option-label"
        >
          100
          <input
            type="radio"
            value="100"
            name="donation-value"
            className="Donation__value-option"
            id="Donation__value-option-100"
          />
          <div className="Donation__overlay" />
        </label>
      </div>
      <div className="Donation__custom-donation">
        <label
          htmlFor="Donation__custom-donation-option"
          className="Donation__custom-donation-option-label"
        >
          Custom Amount
          <input
            type="radio"
            value="5"
            name="donation-value"
            className="Donation__custom-donation-option"
            id="Donation__custom-donation-option"
          />
          <div className="Donation__overlay" />
        </label>
        <input
          type="number"
          name="donation-value"
          min="5"
          max="999"
          className="Donation__custom-donation-input"
        />
      </div>
      <label
        htmlFor="Donation__donation-type"
        className="Donation__donation-type-label"
      >
        <input
          type="checkbox"
          className="Donation__donation-type"
          id="Donation__donation-type"
          name="donation-is-monthly"
        />
        <span className="Donation__donation-type-checkmark" />
        Make this a monthly recurring gift
      </label>
      <PersonInfo />
      <button type="button" className="Donation__button-submit">
        Submit
      </button>
      <CreditCard />
    </div>
  );
}
