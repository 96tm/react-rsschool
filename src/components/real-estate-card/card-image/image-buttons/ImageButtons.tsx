import React from 'react';
import './ImageButtons.css';

interface IImageButtonsProps {
  numberOfPhotos: number;
}

export default function ImageButtons({
  numberOfPhotos,
}: IImageButtonsProps): JSX.Element {
  return (
    <div className="RealEstateCardImageButtons">
      <span className="RealEstateCardNumberOfPhotos">{numberOfPhotos}</span>
      <button type="button" className="RealEstateCardButtonPhoto">
        {}
      </button>
      <button type="button" className="RealEstateCardButtonLayout">
        {}
      </button>
    </div>
  );
}
