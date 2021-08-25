import React from 'react';
import './search-results.css';
import { IPhoto } from '../../shared/models/photo';
import Card from './card/card';

interface ISearchResultsProps {
  photos: IPhoto[];
}

export default function SearchResults({
  photos,
}: ISearchResultsProps): JSX.Element {
  return (
    <div className="search-results">
      {photos.map((photo, index) => (
        <Card
          src={photo.src}
          title={photo.title}
          link={photo.link}
          photoId={photo.id}
          key={`card-${String(index)}`}
        />
      ))}
    </div>
  );
}
