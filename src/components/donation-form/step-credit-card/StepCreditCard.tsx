import React, { ChangeEvent } from 'react';
import './StepCreditCard.css';

interface IStepCreditCardProps {
  step: number;
  creditCardYear: string;
  creditCardMonth: string;
  creditCardNumber: string;
  creditCardCVV: string;
  errors: Record<string, string>;
  months: string[];
  years: string[];
  handleChange: (event: ChangeEvent) => void;
}

export default function StepCreditCard({
  step,
  creditCardYear,
  creditCardMonth,
  creditCardNumber,
  creditCardCVV,
  errors,
  months,
  years,
  handleChange,
}: IStepCreditCardProps): JSX.Element | null {
  const FORM_STEP = 3;
  if (step !== FORM_STEP) {
    return null;
  }
  const CVV_LENGTH = 3;
  const CARD_NUMBER_LENGTH = 16;
  return (
    <div className="StepCreditCard">
      <div className="StepCreditCard__field-container card-number-field-container">
        <label
          htmlFor="StepCreditCard__card-number"
          className="StepCreditCard__card-number-label StepCreditCard__label"
        >
          <span className="blue">*</span> Credit Card Number
        </label>
        <div className="StepCreditCard__input-container">
          <input
            type="text"
            placeholder="Enter your credit card number"
            value={creditCardNumber}
            onChange={handleChange}
            maxLength={CARD_NUMBER_LENGTH}
            name="creditCardNumber"
            className="StepCreditCard__card-number StepCreditCard__input"
          />
        </div>
        <div className="StepCreditCard__field-error-container">
          <p className="input-error">{errors.creditCardNumber}</p>
        </div>
      </div>
      <div className="StepCreditCard__field-container card-cvv-field-container">
        <label
          htmlFor="StepCreditCard__card-cvv"
          className="StepCreditCard__card-cvv-label StepCreditCard__label"
        >
          <span className="blue">*</span> CVV Number
        </label>
        <div className="StepCreditCard__input-container">
          <input
            type="password"
            placeholder="***"
            value={creditCardCVV}
            onChange={handleChange}
            maxLength={CVV_LENGTH}
            name="creditCardCVV"
            className="StepCreditCard__card-cvv StepCreditCard__input"
          />
        </div>
        <div className="StepCreditCard__field-error-container ">
          <p className="input-error">{errors.creditCardCVV}</p>
        </div>
      </div>
      <div className="StepCreditCard__field-container card-month-container">
        <label
          htmlFor="StepCreditCard__card-month"
          className="StepCreditCard__card-month-label StepCreditCard__label"
        >
          <span className="blue">*</span> Expiration Date
        </label>
        <div className="StepCreditCard__select-container">
          <select
            value={creditCardMonth}
            onChange={handleChange}
            name="creditCardMonth"
            id="StepCreditCard__card-month"
            className="StepCreditCard__card-month StepCreditCard__input"
          >
            <option
              value=""
              disabled
              key="StepCreditCard__card-month-placeholder"
            >
              Month
            </option>
            {months.map((month) => (
              <option value={month} key={`StepCreditCard__card-month${month}`}>
                {month}
              </option>
            ))}
          </select>
          <span className="select-arrow" />
        </div>
        <div className="StepCreditCard__field-error-container ">
          <p className="input-error">{errors.creditCardMonth}</p>
        </div>
      </div>

      <div className="StepCreditCard__field-container card-year-container">
        <label
          htmlFor="StepCreditCard__card-year"
          className="StepCreditCard__card-year-label StepCreditCard__label"
        >
          &nbsp;
        </label>
        <div className="StepCreditCard__select-container">
          <select
            value={creditCardYear}
            onChange={handleChange}
            name="creditCardYear"
            id="StepCreditCard__card-year"
            className="StepCreditCard__card-year StepCreditCard__input"
          >
            <option
              value=""
              disabled
              key="StepCreditCard__card-year-placeholder"
            >
              Year
            </option>
            {years.map((year) => (
              <option value={year} key={`StepCreditCard__card-year${year}`}>
                {year}
              </option>
            ))}
          </select>
          <span className="select-arrow" />
        </div>
        <div className="StepCreditCard__field-error-container ">
          <p className="input-error">{errors.creditCardYear}</p>
        </div>
      </div>
    </div>
  );
}
