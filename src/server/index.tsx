import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { store } from '../redux/store';
import renderTemplate from '../shared/renderTemplate';
import renderApp from '../shared/renderApp';

const app = express();

app.use(express.static('dist'));
app.use(express.static('dist/server'));

app.get('*', (req, res) => {
  const context = {};
  const content = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        {renderApp()}
      </Router>
    </Provider>
  );
  res.send(
    renderTemplate({
      cssPath: path.join('client', 'styles.css'),
      jsPath: path.join('client', 'main.js'),
      content,
      title: 'React SSR',
      favicon: path.join('server', 'favicon.png'),
    })
  );
});

app.listen(5000, () => {});
