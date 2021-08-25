import React, { useContext } from 'react';
import './page-link.css';
import AppContext, {
  IHandlePageNumberChange,
} from '../../../../../../shared/app-context';

interface IPageLinkProps {
  pageNumber: number;
  text: string;
}

export default function PageLink({
  pageNumber,
  text,
}: IPageLinkProps): JSX.Element {
  const handlePageNumberChange = useContext(AppContext)
    .handlePageNumberChange as IHandlePageNumberChange;
  const { currentPage } = useContext(AppContext);
  const handleClick = () => {
    handlePageNumberChange(pageNumber);
  };
  return (
    <button
      type="button"
      className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
