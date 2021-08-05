import React, { ChangeEvent } from 'react';
import './StepCreditCard.css';

interface IStepCreditCardProps {
  step: number;
  creditCardYear: string;
  creditCardMonth: string;
  creditCardNumber: string;
  creditCardCVV: string;
  handleChange: (event: ChangeEvent) => void;
}

export default function StepCreditCard({
  step,
  creditCardYear,
  creditCardMonth,
  creditCardNumber,
  creditCardCVV,
  handleChange,
}: IStepCreditCardProps): JSX.Element | null {
  const FORM_STEP = 3;
  const NUMBER_OF_MONTHS = 12;
  const NUMBER_OF_YEARS = 5;
  const CVV_LENGTH = 3;
  if (step !== FORM_STEP) {
    return null;
  }
  return (
    <div className="StepCreditCard">
      <label
        htmlFor="StepCreditCard__card-number"
        className="StepCreditCard__card-number-label StepCreditCard__label"
      >
        <span className="blue">*</span> Credit Card Number
        <input
          type="text"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          value={creditCardNumber}
          onChange={handleChange}
          name="creditCardNumber"
          className="StepCreditCard__card-number StepCreditCard__input"
        />
      </label>
      <label
        htmlFor="StepCreditCard__card-cvv"
        className="StepCreditCard__card-cvv-label StepCreditCard__label"
      >
        <span className="blue">*</span> CVV Number
        <input
          type="password"
          placeholder="***"
          value={creditCardCVV}
          onChange={handleChange}
          minLength={CVV_LENGTH}
          maxLength={CVV_LENGTH}
          name="creditCardCVV"
          className="StepCreditCard__card-cvv StepCreditCard__input"
        />
      </label>
      <label
        htmlFor="StepCreditCard__card-month"
        className="StepCreditCard__card-month-label StepCreditCard__label"
      >
        <span className="blue">*</span> Expiration Date
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
            {Array(NUMBER_OF_MONTHS)
              .fill(0)
              .map((_, index) => {
                const month = String(index < 9 ? `0${index + 1}` : index + 1);
                return (
                  <option
                    value={month}
                    key={`StepCreditCard__card-month${month}`}
                  >
                    {month}
                  </option>
                );
              })}
          </select>
        </div>
      </label>
      <label
        htmlFor="StepCreditCard__card-year"
        className="StepCreditCard__card-year-label StepCreditCard__label"
      >
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
            {Array(NUMBER_OF_YEARS)
              .fill(0)
              .map((_, index) => {
                const year = 2021 + index;
                return (
                  <option value={year} key={`StepCreditCard__card-year${year}`}>
                    {year}
                  </option>
                );
              })}
          </select>
        </div>
      </label>
    </div>
  );
}
