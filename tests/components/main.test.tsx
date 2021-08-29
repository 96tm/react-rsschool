import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import Main from '../../src/components/main/main';

describe('Main', () => {
  test('render Main component', () => {
    render(
      <Router>
        <Main />
      </Router>
    );
  });
});
