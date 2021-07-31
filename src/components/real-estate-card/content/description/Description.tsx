import React from 'react';
import DescriptionTitle from './description-title/DescriptionTitle';
import DescriptionText from './description-text/DescriptionText';

export default function Description(): JSX.Element {
  return (
    <div className="RealEstateCardDescription">
      <DescriptionTitle />
      <DescriptionText />
    </div>
  );
}
