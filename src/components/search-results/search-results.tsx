import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Store } from '../../redux/store';
import { fetchPhotos } from '../../redux/thunks';
import Card from './card/card';
import Loader from '../loader/loader';
import NoResults from '../no-results/no-results';
import ApiService from '../../shared/api-service';
import './search-results.css';

export default function SearchResults(): JSX.Element {
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
  const state = useSelector((stateVariable: Store) => stateVariable);
  const dispatch = useDispatch<ThunkDispatch<Store, undefined, Action>>();

  useEffect(() => {
    const url = ApiService.getPhotosUrl(state, state.lastSearchInput);
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
