import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '../../test-util';
import { store as defaultStore } from '../../../src/redux/store';
import Pagination from '../../../src/components/search-header/search-settings/pagination/pagination';

afterEach(() => cleanup());

describe('Pagination', () => {
  test('Test page button click change', async () => {
    const { getByText } = render(
      <Router>
        <Pagination />
      </Router>,
      { preloadedStore: { ...defaultStore.getState(), numberOfPages: 10 } }
    );
    const buttonPage3 = getByText('3');
    expect(buttonPage3.classList).not.toContain('active');
    await fireEvent.click(buttonPage3);
    expect(buttonPage3.classList).toContain('active');
  });
  test('Test current page input change', async () => {
    const { getByLabelText } = render(
      <Router>
        <Pagination />
      </Router>,
      { preloadedStore: { ...defaultStore.getState(), numberOfPages: 10 } }
    );
    const currentPageInput = getByLabelText(
      'current page input'
    ) as HTMLInputElement;
    expect(currentPageInput.value).toBe('1');
  });
});
