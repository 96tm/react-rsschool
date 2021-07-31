import React from 'react';
import './Footer.css';
import CardDate from './card-date/CardDate';
import LikeCheckbox from './like-button/LikeCheckbox';
import MailButton from './mail-button/MailButton';

export default function Footer(): JSX.Element {
  return (
    <div className="RealEstateCard__Footer">
      <CardDate date="31/07/2021" />
      <LikeCheckbox />
      <MailButton />
    </div>
  );
}
