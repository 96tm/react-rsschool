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
  hasAgreedToPrivacyPolicy,
}: Omit<IDonationFormState, 'step' | 'customDonationAmount'>): JSX.Element {
  const getMonthName = (monthNumber: string) => {
    switch (monthNumber) {
      case '01':
        return 'January';
      case '02':
        return 'February';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
      default:
        return '';
    }
  };
  return (
    <div className="DonationCard">
      <header className="DonationCard__header">Donor info</header>
      <div className="DonationCard__container">
        <label
          htmlFor="DonationCard__input-name"
          className="DonationCard__label-name DonationCard__label"
        >
          Name
        </label>
        <input
          type="text"
          value={String(personName)}
          className="DonationCard__input-name DonationCard__input"
          id="DonationCard__input-name"
        />
        <label
          htmlFor="DonationCard__input-email"
          className="DonationCard__label-email DonationCard__label"
        >
          Email
        </label>
        <input
          type="text"
          value={String(personEmail)}
          className="DonationCard__input-email DonationCard__input"
          id="DonationCard__input-email"
        />
        <label
          htmlFor="DonationCard__input-date-of-birth"
          className="DonationCard__label-date-of-birth DonationCard__label"
        >
          Date of birth
        </label>
        <input
          type="text"
          value={String(personDateOfBirth)}
          className="DonationCard__input-date-of-birth DonationCard__input"
          id="DonationCard__input-date-of-birth"
        />
        <label
          htmlFor="DonationCard__input-donation-amount"
          className="DonationCard__label-donation-amount DonationCard__label"
        >
          Donation amount
        </label>
        <input
          type="text"
          value={String(donationAmount)}
          className="DonationCard__input-donation-amount DonationCard__input"
          id="DonationCard__input-amount"
        />
        <label
          htmlFor="DonationCard__input-is-monthly"
          className="DonationCard__label-is-monthly DonationCard__label"
        >
          Monthly donation
        </label>
        <input
          type="text"
          value={isMonthly ? 'Yes' : 'No'}
          className="DonationCard__input-is-monthly DonationCard__input"
          id="DonationCard__input-is-monthly"
        />
        <label
          htmlFor="DonationCard__input-credit-card-number"
          className="DonationCard__label-credit-card-number DonationCard__label"
        >
          Credit card number
        </label>
        <input
          type="text"
          value={String(creditCardNumber)}
          className="DonationCard__input-credit-card-number DonationCard__input"
          id="DonationCard__input-credit-card-number"
        />
        <label
          htmlFor="DonationCard__input-credit-card-cvv"
          className="DonationCard__label-credit-card-cvv DonationCard__label"
        >
          Credit card CVV
        </label>
        <input
          type="text"
          value={String(creditCardCVV)}
          className="DonationCard__input-credit-card-cvv DonationCard__input"
          id="DonationCard__input-credit-card-cvv"
        />
        <label
          htmlFor="DonationCard__input-credit-card-month"
          className="DonationCard__label-credit-card-month DonationCard__label"
        >
          Credit card valid until month
        </label>
        <input
          type="text"
          value={getMonthName(String(creditCardMonth))}
          className="DonationCard__input-credit-card-month DonationCard__input"
          id="DonationCard__input-credit-card-month"
        />
        <label
          htmlFor="DonationCard__input-credit-card-year"
          className="DonationCard__label-credit-card-year DonationCard__label"
        >
          Credit card valid until year
        </label>
        <input
          type="text"
          value={String(creditCardYear)}
          className="DonationCard__input-credit-card-year DonationCard__input"
          id="DonationCard__input-credit-card-year"
        />
        <label
          htmlFor="DonationCard__input-privacy-policy"
          className="DonationCard__label-privacy-policy DonationCard__label"
        >
          Has agreed to the privacy policy
        </label>
        <input
          type="text"
          value={hasAgreedToPrivacyPolicy ? 'Yes' : 'No'}
          className="DonationCard__input-privacy-policy DonationCard__input"
          id="DonationCard__input-privacy-policy"
        />
      </div>
    </div>
  );
}
