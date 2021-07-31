import React from 'react';
import './DescriptionText.css';

export default function DescriptionText({
  text,
}: {
  text: string;
}): JSX.Element {
  return (
    <div className="RealEstateCard__DescriptionText text-crop" title={text}>
      {text}
    </div>
  );
}
