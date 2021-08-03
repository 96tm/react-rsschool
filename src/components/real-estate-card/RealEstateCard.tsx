import React from 'react';
import './RealEstateCard.css';
import CardImage from './card-image/CardImage';
import Price from './price-section/PriceSection';
import Content from './content/Content';
import Footer from './footer/Footer';
import { IRealEstateCardProps } from './interfaces/IRealEstateCardProps';

export default function RealEstateCard({
  id,
  image,
  price,
  comment,
  descriptionTitle,
  descriptionText,
  agentLogo,
}: IRealEstateCardProps): JSX.Element {
  return (
    <div className="RealEstateCard" id={id}>
      <CardImage src={image} />
      <Price price={price} comment={comment} />
      <Content
        descriptionTitle={descriptionTitle}
        descriptionText={descriptionText}
        agentLogo={agentLogo}
      />
      <Footer cardId={id} />
    </div>
  );
}
