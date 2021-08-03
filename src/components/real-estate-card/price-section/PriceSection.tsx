import React from 'react';
import './PriceSection.css';

interface IPriceSectionProps {
  price: string;
  comment: string;
}

export default function PriceSection({
  price,
  comment,
}: IPriceSectionProps): JSX.Element {
  return (
    <div className="RealEstateCard__PriceSection">
      <p className="RealEstateCard__Price">{price}</p>
      <p className="RealEstateCard__PriceComment">{comment}</p>
    </div>
  );
}
