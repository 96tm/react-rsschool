import React from 'react';
import './Description.css';
import DescriptionTitle from './description-title/DescriptionTitle';
import DescriptionText from './description-text/DescriptionText';

interface IDescriptionProps {
  title: string;
  text: string;
}

export default function Description({
  title,
  text,
}: IDescriptionProps): JSX.Element {
  return (
    <div className="RealEstateCard__Description">
      <DescriptionTitle text={title} />
      <DescriptionText text={text} />
    </div>
  );
}
