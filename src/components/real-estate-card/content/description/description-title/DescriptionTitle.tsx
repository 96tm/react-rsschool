import React from 'react';
import './DescriptionTitle.css';

export default function DescriptionTitle({
  text,
}: {
  text: string;
}): JSX.Element {
  return (
    <div className="RealEstateCard__DescriptionTitle text-crop" title={text}>
      {text}
    </div>
  );
}
