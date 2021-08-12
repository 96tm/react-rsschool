import React from 'react';
import './pages-list.css';
import PageLink from './page-link/page-link';

interface IPagesListProps {
  numberOfPages: number;
  currentPage: number;
}

export default function PagesList({
  numberOfPages,
  currentPage,
}: IPagesListProps): JSX.Element {
  return (
    <ul className="PagesList">
      <PageLink pageNumber={currentPage} />
      <PageLink pageNumber={numberOfPages} />
    </ul>
  );
}
