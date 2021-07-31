import React from 'react';
import './RealEstateCard.css';
import agentLogo from 'public/assets/icons/company-logo.png';
import realEstateImage from 'public/assets/images/real-estate.jpg';
import CardImage from './card-image/CardImage';
import Price from './price-section/PriceSection';
import Content from './content/Content';
import Footer from './footer/Footer';

export default function RealEstateCard(): JSX.Element {
  return (
    <div className="RealEstateCard">
      <CardImage src={realEstateImage} />
      <Price price="₤20,500,00" comment="Guide Price" />
      <Content
        descriptionTitle="5 bedroom apartment for sale"
        descriptionText="Eaton Square, London"
        agentLogo={agentLogo}
      />
      <Footer />
    </div>
  );
}
