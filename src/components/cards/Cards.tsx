import React from 'react';
import './Cards.css';
import IDonationFormState from '../../models/IDonationFormState';
import DonationCard from './donation-card/DonationCard';

export default function Cards({
  cards,
}: {
  cards: IDonationFormState[];
}): JSX.Element {
  return (
    <div className="Cards">
      {cards.map((card, index) => (
        <DonationCard
          personName={card.personName}
          personEmail={card.personEmail}
          personDateOfBirth={card.personDateOfBirth}
          hasAgreedToPrivacyPolicy={card.hasAgreedToPrivacyPolicy}
          donationAmount={card.donationAmount}
          isMonthly={card.isMonthly}
          creditCardNumber={card.creditCardNumber}
          creditCardCVV={card.creditCardCVV}
          creditCardMonth={card.creditCardMonth}
          creditCardYear={card.creditCardYear}
          key={`DonationCard__${String(index)}`}
        />
      ))}
    </div>
  );
}
