import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import Header from '../../src/components/header/header';

describe('Header', () => {
  test('Nav links', async () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    getByText(/home/i);
    getByText(/about/i);
  });
});
