import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './app.css';

import Main from './main/main';
import Header from './header/header';

function App(): JSX.Element {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}
export default App;
