import React, { useState, useRef, useEffect, useCallback } from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './app.css';
import Header from './header/header';
import { API_URL, API_KEY } from '../shared/constants';
import ApiService from '../shared/api-service';
import AppContext, { IHandleLimitChange } from '../shared/app-context';
import { IPhoto, Photo } from '../shared/models/photo';
import SearchResults from './search-results/search-results';
import SortType from '../shared/models/sort-type';
import SortOrder from '../shared/models/sort-order';
import Loader from './loader/loader';
import ErrorMessage from './error-message/error-message';
import NotFound from './not-found/not-found';

interface IAppState {
  isLoading: boolean;
  limit: number;
  pageNumber: number;
  numberOfPages: number;
  photos: IPhoto[];
  searchInput: string;
  noResults: boolean;
}

const apiService = new ApiService(API_URL, API_KEY);

function App() {
  const isFirstRender = useRef(true);
  const LIMIT = 20;
  const JSON_STATUS_OK = 'ok';
  const [error, setError] = useState<string>('');
  const [sortingState, setSortingState] = useState<{
    sortType: SortType;
    sortOrder: SortOrder;
  }>({ sortType: SortType.datePosted, sortOrder: SortOrder.desc });
  const [state, setState] = useState<IAppState>({
    isLoading: false,
    limit: LIMIT,
    pageNumber: 1,
    numberOfPages: 1,
    photos: [],
    searchInput: '',
    noResults: false,
  });

  const getSearchItems = useCallback(() => {
    if (!state.searchInput) {
      return;
    }
    setState((previousState) => ({ ...previousState, isLoading: true }));
    apiService
      .getItems({
        ...state,
        text: state.searchInput,
        sortType: sortingState.sortType,
        sortOrder: sortingState.sortOrder,
      })
      .then((response) => response.json())
      .then((json) => {
        if (!(json.stat === JSON_STATUS_OK)) {
          throw Error(json.message);
        }
        setState((previousState) => ({
          ...previousState,
          noResults: !json.photos.photo.length,
          currentPage: Math.min(previousState.pageNumber, json.photos.pages),
          numberOfPages: Math.max(1, json.photos.pages),
          photos: json.photos.photo.map(
            (item: IPhoto) =>
              new Photo({
                ...item,
                src: apiService.generateImageLink(item),
                link: apiService.generatePhotoLink(item),
              })
          ),
        }));
        setError('');
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setState((previousState) => ({ ...previousState, isLoading: false }));
      });
  }, [state.limit, state.pageNumber, state.searchInput, sortingState]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    getSearchItems();
  }, [getSearchItems]);

  const handleLimitChange: IHandleLimitChange = (event) => {
    setState((previousState) => ({
      ...previousState,
      limit: parseInt(event.target.value, 10),
    }));
  };

  const handlePageNumberChange = (page: number) => {
    if (page > state.numberOfPages) {
      return;
    }
    setState((previousState) => ({ ...previousState, pageNumber: page }));
  };

  const handleSortClick = (sortType: SortType) => {
    if (sortType !== sortingState.sortType) {
      setSortingState((previousState) => ({
        ...previousState,
        sortType,
        sortOrder: SortOrder.asc,
      }));
    } else {
      setSortingState((previousState) => ({
        ...previousState,
        sortOrder:
          previousState.sortOrder === SortOrder.asc
            ? SortOrder.desc
            : SortOrder.asc,
      }));
    }
  };

  const handleSearch = async (text: string) => {
    setState((previousState) => ({
      ...previousState,
      searchInput: text.trim(),
    }));
  };

  const handleErrorCloseClick = () => {
    setError('');
  };

  return (
    <div className="app">
      {error && (
        <ErrorMessage
          message={error}
          handleCloseClick={handleErrorCloseClick}
        />
      )}
      {state.isLoading && <Loader />}
      <AppContext.Provider
        value={{
          currentPage: Math.min(state.pageNumber, state.numberOfPages),
          numberOfPages: state.numberOfPages,
          isLoading: state.isLoading,
          sortType: sortingState.sortType,
          sortOrder: sortingState.sortOrder,
          handleSearch,
          handleSortClick,
          handleLimitChange,
          handlePageNumberChange,
        }}
      >
        <Header />
        {!state.noResults && <SearchResults photos={state.photos} />}
        {state.noResults && <NotFound />}
      </AppContext.Provider>
    </div>
  );
}
export default hot(module)(App);
