import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter as Router } from 'react-router-dom';
import { cleanup, waitFor } from '@testing-library/react';
import { store as defaultStore } from '../../src/redux/store';

import { render } from '../test-util';
import {
  PhotosResponseMockSuccess,
  PhotosResponseSuccessEmptyMock,
} from '../mocks/photosResponseMock';
import SearchResults from '../../src/components/search-results/search-results';
import { PhotoMock1, PhotoMock2, PhotoMock3 } from '../mocks/photosMock';

const ENDPOINT = '/get_photos';
const ENDPOINT_NO_PHOTOS = '/get_no_photos';

const server = setupServer(
  rest.get(ENDPOINT, (req, res, ctx) =>
    res(ctx.json(PhotosResponseMockSuccess), ctx.delay(100))
  ),
  rest.get(ENDPOINT_NO_PHOTOS, (req, res, ctx) =>
    res(ctx.json(PhotosResponseSuccessEmptyMock), ctx.delay(100))
  )
);

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

describe('SearchResults', () => {
  test('Get 3 result items', async () => {
    const { getAllByRole } = render(
      <Router>
        <SearchResults url={ENDPOINT} />
      </Router>,
      {
        preloadedStore: {
          ...defaultStore.getState(),
          photos: [PhotoMock1, PhotoMock2, PhotoMock3],
        },
      }
    );
    await waitFor(async () => {
      const listItems = await getAllByRole('listitem');
      expect(listItems).toHaveLength(3);
    });
  });
  test('Get no results from API', async () => {
    const { queryByRole, queryByText } = render(
      <Router>
        <SearchResults url={ENDPOINT_NO_PHOTOS} />
      </Router>,
      {
        preloadedStore: {
          ...defaultStore.getState(),
          lastSearchInput: 'input',
        },
      }
    );
    await waitFor(async () => {
      const listItems = await queryByRole('listitem');
      expect(listItems).toBeNull();
      expect(1).toBe(1);
      const notFoundElement = await queryByText('Nothing found');
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
