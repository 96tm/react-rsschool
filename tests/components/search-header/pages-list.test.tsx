import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '../../test-util';
import { store as defaultStore } from '../../../src/redux/store';
import PagesList from '../../../src/components/search-header/search-settings/pagination/pages-list/pages-list';

afterEach(() => cleanup());

describe('PagesList', () => {
  test('Test 1 page', async () => {
    const { getAllByLabelText } = render(
      <Router>
        <PagesList />
      </Router>
    );
    const buttonPages = getAllByLabelText('page link button');
    expect(buttonPages).toHaveLength(1);
  });
  test('Test 10 pages', async () => {
    const { getAllByLabelText } = render(
      <Router>
        <PagesList />
      </Router>,
      { preloadedStore: { ...defaultStore.getState(), numberOfPages: 10 } }
    );
    const buttonPages = getAllByLabelText('page link button');
    expect(buttonPages).toHaveLength(6);
  });
});
