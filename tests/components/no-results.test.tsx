import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import NoResults from '../../src/components/no-results/no-results';

describe('NoResults', () => {
  test('Text', async () => {
    const { getByText } = render(
      <Router>
        <NoResults />
      </Router>
    );
    getByText(/nothing found/i);
  });
});
