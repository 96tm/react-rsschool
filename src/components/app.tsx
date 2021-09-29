import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './app.css';

import Main from './main/main';
import Header from './header/header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}
export default hot(module)(App);
