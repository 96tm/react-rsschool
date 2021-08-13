import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './App.css';
import Header from './header/header';
import { API_URL, API_KEY } from '../shared/constants';
import ApiService from '../shared/api-service';
import AppContext from '../shared/app-context';
import IPhoto from '../shared/models/photo';

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
        console.log('json', json);

        setState((previousState) => ({
          ...previousState,
          pageNumber: previousState.pageNumber,
          limit: previousState.limit,
          total: 0,
          photos: [],
        }));
      })
      .catch((err) => console.log('err', err));

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          total: state.total,
          photos: state.photos,
          handleSearchClick,
        }}
      >
        <Header />
      </AppContext.Provider>
    </div>
  );
}

export default hot(module)(App);
