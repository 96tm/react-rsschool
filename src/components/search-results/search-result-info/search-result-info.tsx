import React, { useEffect, useState } from 'react';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import './search-result-info.css';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../loader/loader';
import ErrorMessage from '../../error-message/error-message';
import ApiService from '../../../shared/api-service';
import { Store } from '../../../redux/store';
import { fetchPhotoInfo } from '../../../redux/thunks';
import { changeLoadingStatus } from '../../../redux/actions';
import { IPhotoInfo } from '../../../shared/models/photo-info';

export default function SearchResultInfo(): JSX.Element {
  const { id: photoId } = useParams<{ id: string }>();
  const [hasImageLoaded, setHasImageLoaded] = useState<boolean>(false);
  const { error, loadingStatus: isLoading } = useSelector(
    (state: Store) => state
  );
  const [photoInfo, setPhotoInfo] = useState<IPhotoInfo | undefined>(undefined);
  const dispatch = useDispatch<ThunkDispatch<Store, undefined, Action>>();

  const handleImageLoad = () => {
    setHasImageLoaded(true);
  };

  useEffect(() => {
    async function loadPhotoInfo() {
      dispatch(changeLoadingStatus(false));
      setHasImageLoaded(false);
      const url = ApiService.getPhotoInfoUrl(photoId);
      const info: IPhotoInfo | undefined = await dispatch(fetchPhotoInfo(url));
      setPhotoInfo(info);
    }
    loadPhotoInfo();
  }, []);

  return (
    <div className="search-result-info-container page">
      {Boolean(error) && <ErrorMessage message={error} />}
      {isLoading && (
        <div
          className="search-result-info"
          style={{ justifyContent: 'center' }}
        >
          <Loader />
        </div>
      )}
      {!isLoading && photoInfo && (
        <div className="search-result-info">
          <header className="search-result-info-header">Photo info</header>
          <div className="search-result-info-content">
            <div className="search-result-image-container">
              <img
                className="search-result-image"
                src={ApiService.generateImageLink(photoInfo)}
                alt="Thumbnail"
                onLoad={handleImageLoad}
              />
              {!hasImageLoaded && <Loader />}
            </div>

            <label htmlFor="owner-input" className="search-result-label">
              Owner
            </label>
            <input
              type="text"
              readOnly
              id="owner-input"
              className="owner-input search-result-input"
              value={photoInfo.username || 'No owner specified'}
            />

            <label htmlFor="title-input" className="search-result-label">
              Title
            </label>
            <input
              type="text"
              readOnly
              id="title-input"
              className="title-input search-result-input"
              value={photoInfo.title || 'No title specified'}
            />

            <label htmlFor="description-input" className="search-result-label">
              Description
            </label>
            <input
              type="text"
              readOnly
              id="description-input"
              className="description-input search-result-input"
              value={photoInfo.description || 'No description'}
            />

            <label htmlFor="views-input" className="search-result-label">
              Views
            </label>
            <input
              type="text"
              readOnly
              id="views-input"
              className="views-input search-result-input"
              value={photoInfo.views}
            />

            <label htmlFor="date-taken-input" className="search-result-label">
              Date taken
            </label>
            <input
              type="text"
              readOnly
              id="date-taken-input"
              className="date-taken-input search-result-input"
              value={photoInfo.dateTaken.toLocaleDateString()}
            />

            <label
              htmlFor="date-uploaded-input"
              className="search-result-label"
            >
              Date published
            </label>
            <input
              type="text"
              readOnly
              id="date-uploaded-input"
              className="date-uploaded-input search-result-input"
              value={photoInfo.dateUploaded.toLocaleDateString()}
            />

            <a className="link" href={ApiService.generatePhotoLink(photoInfo)}>
              View at <span className="link-logo">Flickr</span>
            </a>

            <Link className="link-back" to="/">
              Back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
