import React from 'react';
import { hot } from 'react-hot-loader';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default hot(module)(App);
