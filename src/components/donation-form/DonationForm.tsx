import React from 'react';
import './DonationForm.css';
import Donation from './donation/Donation';

export default function DonationForm(): JSX.Element {
  return (
    <div className="DonationForm">
      <header className="DonationForm__header">Donation</header>
      <div className="DonationForm__container">
        <div className="DonationForm__subheader">Donation information</div>
        <Donation />
      </div>
    </div>
  );
}
