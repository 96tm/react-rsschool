import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '../test-util';
import SearchSettings from '../../src/components/search-header/search-settings/search-settings';

afterEach(() => cleanup());

describe('SearchSettings', () => {
  test('Render', async () => {
    render(
      <Router>
        <SearchSettings />
      </Router>
    );
  });
});
