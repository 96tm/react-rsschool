import React from 'react';
import './card.css';

interface ICardProps {
  src: string;
  title: string;
  link: string;
}

export default function Card({ src, title, link }: ICardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-container">
        <div className="image-container">
          <img src={src} alt="Found result" className="image" />
        </div>
        <p className="title" title={title}>
          {title || 'No title'}
        </p>
        <a href={link} className="link">
          View on <span className="logo">Flickr</span>
        </a>
      </div>
    </div>
  );
}
