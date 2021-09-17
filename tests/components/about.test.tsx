import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import About from '../../src/components/pages/about/about';

describe('About', () => {
  test('render component', () => {
    render(
      <Router>
        <About />
      </Router>
    );
  });
});
