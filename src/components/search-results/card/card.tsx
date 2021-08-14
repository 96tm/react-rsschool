import React from 'react';
import './card.css';

interface ICardProps {
  src: string;
  title: string;
}

export default function Card({ src, title }: ICardProps): JSX.Element {
  return (
    <div className="card">
      <div className="container">
        <div className="image-container">
          <img src={src} alt="Found result" className="image" />
        </div>
        <p className="title" title={title}>
          {title}
        </p>
      </div>
    </div>
  );
}
