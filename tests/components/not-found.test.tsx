import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import NotFound from '../../src/components/pages/not-found/not-found';

describe('NoResults', () => {
  test('Text', async () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );
    getByText(/nothing found.../i);
  });
});
