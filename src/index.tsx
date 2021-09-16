import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import renderApp from './shared/renderApp';

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>{renderApp()}</Router>
  </Provider>,
  document.getElementById('root')
);
