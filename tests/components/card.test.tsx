import React from 'react';
import '@testing-library/jest-dom';

import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '../test-util';
import Card from '../../src/components/search-results/card/card';

afterEach(() => cleanup());

describe('Card', () => {
  test('Render component', async () => {
    const cardTitle = 'cardTitle';
    const { getByTitle, getByText } = render(
      <Router>
        <Card
          src="cardSrc"
          title={cardTitle}
          link="cardLink"
          photoId="cardId"
        />
      </Router>
    );
    getByTitle(cardTitle);
    expect((getByText(/^more/) as HTMLAnchorElement).href).toMatch(
      /\/details\/cardId$/
    );
  });
});
