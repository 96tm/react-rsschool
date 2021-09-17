import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '../../test-util';
import Sorting from '../../../src/components/search-header/search-settings/sorting/sorting';

afterEach(() => cleanup());

describe('Sorting', () => {
  test('Test sort order change', async () => {
    const { getByText } = render(
      <Router>
        <Sorting />
      </Router>
    );
    const datePosted = getByText('date posted');
    expect(datePosted.classList).toContain('active');
    expect(datePosted.classList).toContain('desc');
    await fireEvent.click(datePosted);
    expect(datePosted.classList).toContain('asc');
  });
  test('Test sort type change', async () => {
    const { getByText } = render(
      <Router>
        <Sorting />
      </Router>
    );
    const dateTaken = getByText(/date taken/i);
    await fireEvent.click(dateTaken);
    expect(dateTaken.classList).toContain('active');
    expect(dateTaken.classList).toContain('desc');
  });
});
