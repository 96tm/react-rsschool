import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '../../test-util';
import PageLink from '../../../src/components/search-header/search-settings/pagination/pages-list/page-link/page-link';

afterEach(() => cleanup());

describe('PagesLink', () => {
  test('Test render', async () => {
    render(
      <Router>
        <PageLink pageNumber={1} text="1" />
      </Router>
    );
  });
});
