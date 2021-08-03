import React from 'react';
import ImageButtons from './image-buttons/ImageButtons';
import './CardImage.css';

interface ICardImageProps {
  src: string;
}

export default function CardImage({ src }: ICardImageProps): JSX.Element {
  return (
    <div className="RealEstateCard__CardImageContainer">
      <img className="RealEstateCard__CardImage" src={src} alt="Real estate" />
      <ImageButtons numberOfPhotos={28} />
    </div>
  );
}
