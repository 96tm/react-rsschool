import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './page-link.css';
import { Store } from '../../../../../../redux/store';
import { changeCurrentPage } from '../../../../../../redux/actions';

interface IPageLinkProps {
  pageNumber: number;
  text: string;
}

export default function PageLink({
  pageNumber,
  text,
}: IPageLinkProps): JSX.Element {
  const { currentPage } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCurrentPage(pageNumber));
  };

  return (
    <button
      type="button"
      className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
      onClick={handleClick}
      aria-label="page link button"
    >
      {text}
    </button>
  );
}
