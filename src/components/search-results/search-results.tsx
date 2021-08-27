import React, { useCallback, useEffect, useState } from 'react';
import './search-results.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from './card/card';
import { Store } from '../../redux/store';
import NoResults from '../no-results/no-results';
import Loader from '../loader/loader';
import ApiService from '../../shared/api-service';
import { fetchPhotos } from '../../redux/thunks';

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
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const getSearchItems = useCallback(async () => {
    if (!lastSearchInput) {
      return;
    }
    const url = ApiService.getPhotosUrl({ ...store }, lastSearchInput);
    await dispatch(fetchPhotos(url));
    setRequestStatus(true);
  }, [limit, currentPage, sortType, sortOrder, lastSearchInput]);

  useEffect(() => {
    getSearchItems();
  }, [getSearchItems]);

  return (
    <div className="search-results">
      {isLoading && <Loader />}
      {!photos.length && requestStatus && !isLoading && <NoResults />}
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
