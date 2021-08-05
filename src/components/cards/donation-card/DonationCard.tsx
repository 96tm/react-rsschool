import React from 'react';
import './DonationCard.css';
import IDonationFormState from '../../../models/IDonationFormState';

export default function DonationCard({
  personName,
  personEmail,
  personDateOfBirth,
  donationAmount,
  isMonthly,
  creditCardNumber,
  creditCardCVV,
  creditCardMonth,
  creditCardYear,
}: Omit<IDonationFormState, 'step' | 'customDonationAmount'>): JSX.Element {
  return (
    <div className="DonationCard">
      <label
        htmlFor="DonationCard__input-name"
        className="DonationCard__label-name DonationCard__label"
      >
        <input
          type="text"
          value={String(personName)}
          className="DonationCard__input-name DonationCard__input"
          id="DonationCard__input-name"
        />
      </label>
      <label
        htmlFor="DonationCard__input-email"
        className="DonationCard__label-email DonationCard__label"
      >
        <input
          type="text"
          value={String(personEmail)}
          className="DonationCard__input-email DonationCard__input"
          id="DonationCard__input-email"
        />
      </label>
      <label
        htmlFor="DonationCard__input-date-of-birth"
        className="DonationCard__label-date-of-birth DonationCard__label"
      >
        <input
          type="text"
          value={String(personDateOfBirth)}
          className="DonationCard__input-date-of-birth DonationCard__input"
          id="DonationCard__input-date-of-birth"
        />
      </label>
      <label
        htmlFor="DonationCard__input-donation-amount"
        className="DonationCard__label-donation-amount DonationCard__label"
      >
        <input
          type="text"
          value={String(donationAmount)}
          className="DonationCard__input-donation-amount DonationCard__input"
          id="DonationCard__input-amount"
        />
      </label>
      <label
        htmlFor="DonationCard__input-is-monthly"
        className="DonationCard__label-is-monthly DonationCard__label"
      >
        <input
          type="text"
          value={String(isMonthly)}
          className="DonationCard__input-is-monthly DonationCard__input"
          id="DonationCard__input-is-monthly"
        />
      </label>
      <label
        htmlFor="DonationCard__input-credit-card-number"
        className="DonationCard__label-credit-card-number DonationCard__label"
      >
        <input
          type="text"
          value={String(creditCardNumber)}
          className="DonationCard__input-credit-card-number DonationCard__input"
          id="DonationCard__input-credit-card-number"
        />
      </label>
      <label
        htmlFor="DonationCard__input-credit-card-cvv"
        className="DonationCard__label-credit-card-cvv DonationCard__label"
      >
        <input
          type="text"
          value={String(creditCardCVV)}
          className="DonationCard__input-credit-card-cvv DonationCard__input"
          id="DonationCard__input-credit-card-cvv"
        />
      </label>
      <label
        htmlFor="DonationCard__input-credit-card-month"
        className="DonationCard__label-credit-card-month DonationCard__label"
      >
        <input
          type="text"
          value={String(creditCardMonth)}
          className="DonationCard__input-credit-card-month DonationCard__input"
          id="DonationCard__input-credit-card-month"
        />
      </label>
      <label
        htmlFor="DonationCard__input-credit-card-year"
        className="DonationCard__label-credit-card-year DonationCard__label"
      >
        <input
          type="text"
          value={String(creditCardYear)}
          className="DonationCard__input-credit-card-year DonationCard__input"
          id="DonationCard__input-credit-card-year"
        />
      </label>
    </div>
  );
}
