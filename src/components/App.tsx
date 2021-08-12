import React from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './App.css';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default hot(module)(App);
