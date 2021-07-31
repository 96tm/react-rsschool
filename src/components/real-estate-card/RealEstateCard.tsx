import React from 'react';
import './RealEstateCard.css';
import realEstateImage from 'public/assets/images/real-estate.jpg';
import CardImage from './card-image/CardImage';
import Price from './price/Price';
import Content from './content/Content';

export default function RealEstateCard(): JSX.Element {
  return (
    <div className="RealEstateCard">
      <CardImage src={realEstateImage} />
      <Price />
      <Content />
    </div>
  );
}
