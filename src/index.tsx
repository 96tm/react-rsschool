import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/app';
import { store } from './redux/store';

const HotApp = hot(module)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HotApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
