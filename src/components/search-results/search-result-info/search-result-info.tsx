import React, { useEffect, useContext, useState } from 'react';
import './search-result-info.css';
import { useParams, Link } from 'react-router-dom';
import AppContext from '../../../shared/app-context';
import Loader from '../../loader/loader';
import ErrorMessage from '../../error-message/error-message';

interface IResponseJSON {
  photo: IPhotoInfo;
  stat: string;
}

interface IPhotoInfo {
  id: string;
  secret: string;
  server: string;
  owner: { username: string; nsid: string };
  title: { _content: string };
  description: { _content: string };
  dateuploaded: string;
  dates: { taken: string };
  views: number;
}

interface ISearchResultInfoState {
  id: string;
  secret: string;
  server: string;
  owner: string;
  username: string;
  title: string;
  description: string;
  dateUploaded: Date;
  dateTaken: Date;
  views: number;
  empty: boolean;
}

export default function SearchResultInfo(): JSX.Element {
  const RESPONSE_STATUS_OK = 'ok';
  const { apiService } = useContext(AppContext);
  const { id: photoId } = useParams<{ id: string }>();
  const [hasImageLoaded, setHasImageLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<ISearchResultInfoState>({
    secret: '',
    server: '',
    id: '',
    empty: true,
    owner: '',
    username: '',
    title: '',
    description: '',
    dateUploaded: new Date(),
    dateTaken: new Date(),
    views: 0,
  });

  const handleCloseClick = () => {
    setError('');
  };

  const handleImageLoad = () => {
    setHasImageLoaded(true);
  };

  useEffect(() => {
    setHasImageLoaded(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    apiService
      ?.getItemInfo({ photoId })
      .then((response) => response.json())
      .then((json: IResponseJSON) => {
        if (!(json.stat === RESPONSE_STATUS_OK)) {
          throw Error(`Can't get photo details`);
        }
        setState({
          empty: false,
          id: json.photo.id,
          secret: json.photo.secret,
          server: json.photo.server,
          owner: json.photo.owner.nsid,
          username: json.photo.owner.username,
          views: json.photo.views,
          title: json.photo.title._content,
          description: json.photo.description._content,
          dateUploaded: new Date(Number(json.photo.dateuploaded) * 1000),
          dateTaken: new Date(json.photo.dates.taken),
        });
        setError('');
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="search-result-info-container page">
      {error && (
        <ErrorMessage message={error} handleCloseClick={handleCloseClick} />
      )}
      {isLoading && (
        <div className="search-result-info">
          <Loader />
        </div>
      )}
      {!isLoading && !state.empty && (
        <div className="search-result-info">
          <header className="search-result-info-header">Photo info</header>
          <div className="search-result-info-content">
            <div className="search-result-image-container">
              <img
                className="search-result-image"
                src={apiService?.generateImageLink(state)}
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
              value={state.username || 'No owner specified'}
            />
            <label htmlFor="title-input" className="search-result-label">
              Title
            </label>
            <input
              type="text"
              readOnly
              id="title-input"
              className="title-input search-result-input"
              value={state.title || 'No title specified'}
            />

            <label htmlFor="description-input" className="search-result-label">
              Description
            </label>
            <input
              type="text"
              readOnly
              id="description-input"
              className="description-input search-result-input"
              value={state.description || 'No description'}
            />

            <label htmlFor="views-input" className="search-result-label">
              Views
            </label>
            <input
              type="text"
              readOnly
              id="views-input"
              className="views-input search-result-input"
              value={state.views}
            />

            <label htmlFor="date-taken-input" className="search-result-label">
              Date taken
            </label>
            <input
              type="text"
              readOnly
              id="date-taken-input"
              className="date-taken-input search-result-input"
              value={state.dateTaken.toLocaleDateString()}
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
              value={state.dateUploaded.toLocaleDateString()}
            />
            <a className="link" href={apiService?.generatePhotoLink(state)}>
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
