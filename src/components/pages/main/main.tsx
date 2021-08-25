import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  API_URL,
  API_KEY,
  ROUTER_TRANSITION_TIMEOUT,
  JSON_STATUS_OK,
} from '../../../shared/constants';
import ApiService from '../../../shared/api-service';
import AppContext, { IHandleLimitChange } from '../../../shared/app-context';
import { IPhoto, Photo } from '../../../shared/models/photo';
import SearchResults from '../../search-results/search-results';
import SortType from '../../../shared/models/sort-type';
import SortOrder from '../../../shared/models/sort-order';
import Loader from '../../loader/loader';
import ErrorMessage from '../../error-message/error-message';
import NotFound from '../../no-results/no-results';
import SearchResultInfo from '../../search-results/search-result-info/search-result-info';
import PageNotFound from '../not-found/not-found';
import SearchHeader from '../../search-header/search-header';
import './main.css';
import About from '../about/about';

interface IAppState {
  isLoading: boolean;
  limit: number;
  pageNumber: number;
  numberOfPages: number;
  photos: IPhoto[];
  searchInput: string;
  noResults: boolean;
  sortType: SortType;
  sortOrder: SortOrder;
}

const apiService = new ApiService(API_URL, API_KEY);
const DEFAULT_STATE = {
  isLoading: false,
  limit: 20,
  pageNumber: 1,
  numberOfPages: 1,
  photos: [],
  searchInput: '',
  noResults: false,
  sortType: SortType.datePosted,
  sortOrder: SortOrder.asc,
};

function Main(): JSX.Element {
  const isFirstRender = useRef(true);
  const [error, setError] = useState<string>('');
  const [state, setState] = useState<IAppState>(DEFAULT_STATE);

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
    setState((previousState) => ({
      ...previousState,
      sortType,
      sortOrder:
        previousState.sortOrder === SortOrder.asc
          ? SortOrder.desc
          : SortOrder.asc,
    }));
  };

  const handleErrorCloseClick = () => {
    setError('');
  };

  const getSearchItems = useCallback(
    (text: string) => {
      if (!text) {
        return;
      }
      setState((previousState) => ({ ...previousState, isLoading: true }));
      apiService
        .getItems({
          ...state,
          text,
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
    },
    [state.limit, state.pageNumber, state.sortType, state.sortOrder]
  );

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      searchInput: event.target.value,
    }));
  };

  const handleSearch = (text: string) => {
    const trimmed = text.trim();
    setState({
      ...DEFAULT_STATE,
      searchInput: trimmed,
    });
    if (trimmed) {
      getSearchItems(trimmed);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    getSearchItems(state.searchInput);
  }, [getSearchItems]);

  const location = useLocation();

  return (
    <main className="main">
      {error && (
        <ErrorMessage
          message={error}
          handleCloseClick={handleErrorCloseClick}
        />
      )}
      {state.isLoading && <Loader />}
      <TransitionGroup className="transition-group">
        <CSSTransition
          timeout={ROUTER_TRANSITION_TIMEOUT}
          classNames="page"
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/">
              <div className="page">
                <AppContext.Provider
                  value={{
                    ...state,
                    currentPage: Math.min(
                      state.pageNumber,
                      state.numberOfPages
                    ),
                    handleSearch,
                    handleSortClick,
                    handleLimitChange,
                    handlePageNumberChange,
                    handleSearchInputChange,
                    apiService,
                  }}
                >
                  <SearchHeader />
                  {!state.noResults && <SearchResults photos={state.photos} />}
                  {state.noResults && <NotFound />}
                </AppContext.Provider>
              </div>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details/:id">
              <div className="page">
                <AppContext.Provider
                  value={{
                    ...state,
                    currentPage: Math.min(
                      state.pageNumber,
                      state.numberOfPages
                    ),
                    handleSearch,
                    handleSortClick,
                    handleLimitChange,
                    handlePageNumberChange,
                    apiService,
                  }}
                >
                  <SearchResultInfo />
                </AppContext.Provider>
              </div>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
export default Main;
