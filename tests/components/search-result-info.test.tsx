import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, cleanup } from '../test-util';
import SearchResultInfo from '../../src/components/search-results/search-result-info/search-result-info';
import { PhotoInfoResponseMockSuccess } from '../mocks/photoInfoResponseMock';

const ENDPOINT = '/get_photo';

const server = setupServer(
  rest.get(ENDPOINT, (req, res, ctx) =>
    res(ctx.json(PhotoInfoResponseMockSuccess), ctx.delay(100))
  )
);

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

describe('Render SearchResultInfo', () => {
  test('Render item', async () => {
    const history = createMemoryHistory();
    history.push('/details/12345');
    render(
      <Router history={history}>
        <Route path="/details/12345">
          <SearchResultInfo />
        </Route>
      </Router>
    );
  });
});
