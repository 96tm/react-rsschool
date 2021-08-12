import React from 'react';
import { hot } from 'react-hot-loader';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello, World! </h1>
    </div>
  );
}

export default hot(module)(App);
