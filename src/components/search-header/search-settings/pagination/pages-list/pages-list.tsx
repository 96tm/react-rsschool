import React from 'react';
import './pages-list.css';
import { useSelector } from 'react-redux';
import PageLink from './page-link/page-link';
import { Store } from '../../../../../redux/store';

export default function PagesList(): JSX.Element {
  const { currentPage, numberOfPages } = useSelector((state: Store) => state);
  const STRIDE = 5;

  const generatePageLinks = (current: number, total: number) => {
    const pages: (number | null)[] = [1];
    let lengthLeft;
    if (current <= STRIDE) {
      lengthLeft = current;
      pages.push(
        ...Array(lengthLeft - 1)
          .fill(0)
          .map((_, index) => index + 2)
      );
    } else {
      pages.push(...[null, current - 1, current]);
      lengthLeft = 2;
    }

    const lengthRight = Math.max(1, STRIDE - lengthLeft);
    pages.push(
      ...Array(Math.min(lengthRight, total - current))
        .fill(0)
        .map((_, index) => index + current + 1)
    );

    const last = pages[pages.length - 1];
    if (last && total - last > 1) {
      pages.push(null, total);
    } else if (last && total - last === 1) {
      pages.push(total);
    }
    return pages;
  };

  return (
    <ul className="pages-list">
      {generatePageLinks(currentPage, numberOfPages).map((item, index) => {
        let element: JSX.Element;
        if (item) {
          element = <PageLink pageNumber={item} text={String(item)} />;
        } else {
          element = <span className="ellipsis">{' ... '}</span>;
        }
        return (
          <li className="page-link" key={`page-link-item-${String(index)}`}>
            {element}
          </li>
        );
      })}
    </ul>
  );
}
