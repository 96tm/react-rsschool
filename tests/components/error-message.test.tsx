import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '../test-util';
import ErrorMessage from '../../src/components/error-message/error-message';

describe('ErrorMessage', () => {
  test('Render component', async () => {
    const errorMessage = 'errorMessage';
    const { getByText } = render(
      <Router>
        <ErrorMessage message={errorMessage} />
      </Router>
    );
    getByText(errorMessage);
  });
});
