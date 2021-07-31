import React from 'react';
import './CardDate.css';

export default function CardDate({ date }: { date: string }): JSX.Element {
  return (
    <div
      className="RealEstateCard__DateAdded text-crop"
      title={date}
    >{`Added on ${date}`}</div>
  );
}
