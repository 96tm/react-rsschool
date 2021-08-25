import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Loader from '../../loader/loader';

interface ICardProps {
  src: string;
  title: string;
  link: string;
  photoId: string;
}

export default function Card({
  src,
  title,
  link,
  photoId,
}: ICardProps): JSX.Element {
  const [hasImageLoaded, setHasImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasImageLoaded(false);
  }, [src]);

  const handleImageLoad = () => {
    setHasImageLoaded(true);
  };

  return (
    <div className="card">
      <div className="card-container">
        <div className="image-container">
          <img
            src={src}
            alt="Found result"
            className="image"
            onLoad={handleImageLoad}
          />
          {!hasImageLoaded && <Loader />}
        </div>
        <p className="title" title={title}>
          {title || 'No title'}
        </p>
        <a href={link} className="link">
          View on <span className="link-logo">Flickr</span>
        </a>
        <Link className="detail-link" to={`/details/${photoId}`}>
          more...
        </Link>
      </div>
    </div>
  );
}
