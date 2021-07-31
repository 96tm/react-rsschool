import React from 'react';
import { hot } from 'react-hot-loader';
import SearchBar from './search-bar/SearchBar';
import RealEstateCard from './real-estate-card/RealEstateCard';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <RealEstateCard />
    </div>
  );
}

export default hot(module)(App);
