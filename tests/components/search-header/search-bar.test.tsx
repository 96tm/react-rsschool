import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '../../test-util';
import SearchBar from '../../../src/components/search-header/search-bar/search-bar';

afterEach(() => cleanup());

describe('SearchBar', () => {
  test('Test sort order change', async () => {
    const callback = jest.fn();
    const { getByLabelText } = render(
      <Router>
        <SearchBar handleSettingsClick={callback} />
      </Router>
    );
    const buttonSettings = getByLabelText('toggle settings');
    await fireEvent.click(buttonSettings);
    expect(callback).toBeCalledTimes(1);
  });
});
