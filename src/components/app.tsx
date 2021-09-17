import React from 'react';
import 'public/assets/css/normalize.css';
import 'public/assets/css/base.css';
import './app.css';

import Main from './main/main';
import Header from './header/header';

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
export default App;
