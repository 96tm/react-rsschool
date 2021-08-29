import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '../../test-util';
import SearchHeader from '../../../src/components/search-header/search-header';

afterEach(() => cleanup());

describe('SearchHeader', () => {
  test('Toggle settings', async () => {
    const { queryByText, getByLabelText, getByText } = render(
      <Router>
        <SearchHeader />
      </Router>
    );
    expect(queryByText('date posted')).toBeNull();
    const buttonSettings = getByLabelText('toggle settings');
    await fireEvent.click(buttonSettings);
    getByText('date posted');
  });
});
