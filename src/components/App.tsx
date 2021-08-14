import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './App.css';
import Header from './header/header';
import { API_URL, API_KEY } from '../shared/constants';
import ApiService from '../shared/api-service';
import AppContext from '../shared/app-context';
import { IPhoto, Photo } from '../shared/models/photo';
import SearchResults from './search-results/search-results';
import SortType from '../shared/models/sort-type';
import SortOrder from '../shared/models/sort-order';

interface IAppState {
  pageNumber: number;
  limit: number;
  numberOfPages: number;
  photos: IPhoto[];
  searchInput: string;
  sortType: SortType;
  sortOrder: SortOrder;
}

const apiService = new ApiService(API_URL, API_KEY);

function App() {
  const PAGE_NUMBER = 1;
  const LIMIT = 20;
  const [state, setState] = useState<IAppState>({
    pageNumber: PAGE_NUMBER,
    limit: LIMIT,
    numberOfPages: 0,
    photos: [],
    searchInput: '',
    sortType: SortType.datePosted,
    sortOrder: SortOrder.desc,
  });

  const getSearchItems = () => {
    apiService
      .getItems({ ...state, text: state.searchInput })
      .then((response) => response.json())
      .then((json) => {
        setState((previousState) => ({
          ...previousState,
          limit: previousState.limit,
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
  };

  const handleSortClick = (sortType: SortType) => {
    if (sortType !== state.sortType) {
      setState((previousState) => ({
        ...previousState,
        sortType,
        sortOrder: SortOrder.asc,
      }));
    } else {
      setState((previousState) => ({
        ...previousState,
        sortOrder:
          previousState.sortOrder === SortOrder.asc
            ? SortOrder.desc
            : SortOrder.asc,
      }));
    }
    getSearchItems();
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
          sortType: state.sortType,
          sortOrder: state.sortOrder,
          handleSearchClick,
          handleSortClick,
        }}
      >
        <Header />
        <SearchResults photos={state.photos} />
      </AppContext.Provider>
    </div>
  );
}

export default hot(module)(App);
