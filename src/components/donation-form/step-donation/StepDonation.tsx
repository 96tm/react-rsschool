import React from 'react';
import './StepDonation.css';
import IDonationProps from './IDonationProps';

export default function StepDonation({
  step,
  donationAmount,
  isMonthly,
  customDonationAmount,
  handleChange,
}: IDonationProps): JSX.Element | null {
  const FORM_STEP = 1;
  if (step !== FORM_STEP) {
    return null;
  }
  return (
    <div className="StepDonation">
      <p className="StepDonation__title">
        <span className="blue">*</span> Choose your donation amount:
      </p>
      <div className="StepDonation__Values">
        <label
          htmlFor="StepDonation__value-option-10"
          className="StepDonation__value-option-label"
        >
          10
          <input
            type="radio"
            value="10"
            checked={donationAmount === 10}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-10"
          />
          <div className="StepDonation__overlay" />
        </label>
        <label
          htmlFor="StepDonation__value-option-20"
          className="StepDonation__value-option-label"
        >
          20
          <input
            type="radio"
            value="20"
            checked={donationAmount === 20}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-20"
          />
          <div className="StepDonation__overlay" />
        </label>
        <label
          htmlFor="StepDonation__value-option-30"
          className="StepDonation__value-option-label"
        >
          30
          <input
            type="radio"
            value="30"
            checked={donationAmount === 30}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-30"
          />
          <div className="StepDonation__overlay" />
        </label>
        <label
          htmlFor="StepDonation__value-option-50"
          className="StepDonation__value-option-label"
        >
          50
          <input
            type="radio"
            value="50"
            checked={donationAmount === 50}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-50"
          />
          <div className="StepDonation__overlay" />
        </label>
        <label
          htmlFor="StepDonation__value-option-80"
          className="StepDonation__value-option-label"
        >
          80
          <input
            type="radio"
            value="80"
            checked={donationAmount === 80}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-80"
          />
          <div className="StepDonation__overlay" />
        </label>
        <label
          htmlFor="StepDonation__value-option-100"
          className="StepDonation__value-option-label"
        >
          100
          <input
            type="radio"
            value="100"
            checked={donationAmount === 100}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__value-option"
            id="StepDonation__value-option-100"
          />
          <div className="StepDonation__overlay" />
        </label>
      </div>
      <div className="StepDonation__custom-donation">
        <label
          htmlFor="StepDonation__custom-donation-option"
          className="StepDonation__custom-donation-option-label"
        >
          Custom Amount
          <input
            type="radio"
            value="0"
            checked={donationAmount === 0}
            onChange={handleChange}
            name="donationAmount"
            className="StepDonation__custom-donation-option"
            id="StepDonation__custom-donation-option"
          />
          <div className="StepDonation__overlay" />
        </label>
        <input
          type="number"
          name="customDonationAmount"
          min="5"
          max="999"
          value={customDonationAmount}
          onChange={handleChange}
          className={`StepDonation__custom-donation-input${
            donationAmount !== 0 ? ' hidden' : ''
          }`}
        />
      </div>
      <label
        htmlFor="StepDonation__donation-type"
        className="StepDonation__donation-type-label"
      >
        <input
          type="checkbox"
          className="StepDonation__donation-type"
          checked={isMonthly}
          onChange={handleChange}
          id="StepDonation__donation-type"
          name="isMonthly"
        />
        <span className="StepDonation__donation-type-checkmark" />
        Make this a monthly recurring gift
      </label>
    </div>
  );
}
