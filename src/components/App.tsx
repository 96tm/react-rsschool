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

interface IAppState {
  pageNumber: number;
  limit: number;
  total: number;
  photos: IPhoto[];
}

const apiService = new ApiService(API_URL, API_KEY);

function App() {
  const PAGE_NUMBER = 1;
  const LIMIT = 20;
  const [state, setState] = useState<IAppState>({
    pageNumber: PAGE_NUMBER,
    limit: LIMIT,
    total: 0,
    photos: [],
  });

  const handleSearchClick = async (text: string) =>
    apiService
      .getItems(text)
      .then((response) => response.json())
      .then((json) => {
        setState((previousState) => ({
          ...previousState,
          pageNumber: json.photos.pages,
          limit: previousState.limit,
          total: 0,
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

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          total: state.total,
          handleSearchClick,
        }}
      >
        <Header />
        <SearchResults photos={state.photos} />
      </AppContext.Provider>
    </div>
  );
}

export default hot(module)(App);
