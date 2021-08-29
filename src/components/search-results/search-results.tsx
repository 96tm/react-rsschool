import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';
import { Action } from 'redux';
import './search-results.css';
import Card from './card/card';
import { Store } from '../../redux/store';
import NoResults from '../no-results/no-results';
import Loader from '../loader/loader';
import { fetchPhotos } from '../../redux/thunks';

export default function SearchResults({ url }: { url: string }): JSX.Element {
  const [requestStatus, setRequestStatus] = useState(false);
  const {
    sortType,
    sortOrder,
    currentPage,
    limit,
    loadingStatus: isLoading,
    lastSearchInput,
    photos,
  } = useSelector((state: Store) => state);
  const dispatch = useDispatch<ThunkDispatch<Store, undefined, Action>>();

  useEffect(() => {
    let isActive = true;
    async function loadPhotos() {
      if (!lastSearchInput) {
        return;
      }
      dispatch(fetchPhotos(url)).then(() => {
        if (isActive) {
          setRequestStatus(true);
        }
      });
    }
    loadPhotos();
    return () => {
      isActive = false;
    };
  }, [limit, currentPage, sortType, sortOrder, lastSearchInput]);

  return (
    <ul className="search-results">
      {isLoading && <Loader />}
      {!photos.length && requestStatus && !isLoading && <NoResults />}
      {photos.map((photo, index) => (
        <li className="result-item" key={`result-item${String(index)}`}>
          <Card
            src={photo.src}
            title={photo.title}
            link={photo.link}
            photoId={photo.id}
          />
        </li>
      ))}
    </ul>
  );
}
