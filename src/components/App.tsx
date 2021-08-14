import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './App.css';
import Header from './header/header';
import { API_URL, API_KEY } from '../shared/constants';
import ApiService from '../shared/api-service';
import AppContext, { IHandleLimitChange } from '../shared/app-context';
import { IPhoto, Photo } from '../shared/models/photo';
import SearchResults from './search-results/search-results';
import SortType from '../shared/models/sort-type';
import SortOrder from '../shared/models/sort-order';

interface IAppState {
  pageNumber: number;
  numberOfPages: number;
  photos: IPhoto[];
  searchInput: string;
}

const apiService = new ApiService(API_URL, API_KEY);

function App() {
  const isFirstRender = useRef(true);
  const PAGE_NUMBER = 1;
  const LIMIT = 20;
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(LIMIT);
  const [sortingState, setSortingState] = useState<{
    sortType: SortType;
    sortOrder: SortOrder;
  }>({ sortType: SortType.datePosted, sortOrder: SortOrder.desc });
  const [state, setState] = useState<IAppState>({
    pageNumber: PAGE_NUMBER,
    numberOfPages: 0,
    photos: [],
    searchInput: '',
  });

  const getSearchItems = useCallback(() => {
    apiService
      .getItems({
        ...state,
        text: state.searchInput,
        pageNumber,
        limit,
        sortType: sortingState.sortType,
        sortOrder: sortingState.sortOrder,
      })
      .then((response) => response.json())
      .then((json) => {
        setState((previousState) => ({
          ...previousState,
          numberOfPages: json.photos.pages,
          photos: json.photos.photo.map(
            (item: IPhoto) =>
              new Photo({
                ...item,
                src: apiService.generateImageLink(item),
                link: apiService.generatePhotoLink(item),
              })
          ),
        }));
      })
      .catch((err) => console.error('err', err));
  }, [limit, pageNumber, sortingState]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    getSearchItems();
  }, [getSearchItems]);

  const handleLimitChange: IHandleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const handlePageNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(parseInt(event.target.value, 10));
  };

  const handleSortClick = (sortType: SortType) => {
    if (sortType !== sortingState.sortType) {
      setSortingState({
        sortType,
        sortOrder: SortOrder.asc,
      });
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

  const handleSearchClick = async (text: string) => {
    setState((previousState) => ({ ...previousState, searchInput: text }));
    getSearchItems();
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          numberOfPages: state.numberOfPages,
          sortType: sortingState.sortType,
          sortOrder: sortingState.sortOrder,
          handleSearchClick,
          handleSortClick,
          handleLimitChange,
          handlePageNumberChange,
        }}
      >
        <Header />
        <SearchResults photos={state.photos} />
      </AppContext.Provider>
    </div>
  );
}

export default hot(module)(App);
