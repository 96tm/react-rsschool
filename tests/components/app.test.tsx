import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import App from '../../src/components/app';

describe('App', () => {
  test('render App component', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
