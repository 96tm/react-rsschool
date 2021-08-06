import React, { FormEvent } from 'react';
import './StepDonation.css';

interface IDonationProps {
  step: number;
  donationAmount: number;
  isMonthly: boolean;
  customDonationAmount: number;
  errors: Record<string, string>;
  handleChange: (event: FormEvent) => void;
}

export default function StepDonation({
  step,
  donationAmount,
  isMonthly,
  customDonationAmount,
  errors,
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
        {[10, 20, 30, 50, 80, 100].map((value) => (
          <label
            htmlFor={`StepDonation__value-option-${value}`}
            className="StepDonation__value-option-label"
            key={`StepDonation__value-option-label-${value}`}
          >
            {value}
            <input
              type="radio"
              value={value}
              checked={donationAmount === value}
              onChange={handleChange}
              name="donationAmount"
              className="StepDonation__value-option"
              id={`StepDonation__value-option-${value}`}
              key={`StepDonation__value-option-${value}`}
            />
            <div className="StepDonation__overlay" />
          </label>
        ))}
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
        <div className="StepDonation__input-container">
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
          <p className="input-error">{errors.customDonationAmount}</p>
        </div>
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
        <span className="StepDonation__donation-type-slider" />
        Make this a monthly recurring gift
      </label>
    </div>
  );
}
