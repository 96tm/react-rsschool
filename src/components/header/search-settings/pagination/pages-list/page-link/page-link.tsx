import React, { useState } from 'react';
import './page-link.css';

interface IPageLinkProps {
  pageNumber: number;
}

export default function PageLink({ pageNumber }: IPageLinkProps): JSX.Element {
  const [page] = useState(pageNumber);
  return <li className="PageLink">{page}</li>;
}
