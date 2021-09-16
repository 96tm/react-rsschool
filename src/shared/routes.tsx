import React from 'react';
import { RouteProps } from 'react-router-dom';
import About from '../components/pages/about/about';
import NotFound from '../components/pages/not-found/not-found';
import SearchHeader from '../components/search-header/search-header';
import SearchResultInfo from '../components/search-results/search-result-info/search-result-info';
import SearchResults from '../components/search-results/search-results';

export interface IRouteSchema {
  key: string;
  path: string;
  component: JSX.Element;
  props?: RouteProps;
}

export const ROUTES: IRouteSchema[] = [
  {
    key: 'index',
    path: '/',
    props: { exact: true },
    component: (
      <div className="page">
        <SearchHeader />
        <SearchResults />
      </div>
    ),
  },
  {
    key: 'about',
    path: '/about',
    component: <About />,
  },
  {
    key: 'details',
    path: '/details/:id',
    component: (
      <div className="page">
        <SearchResultInfo />
      </div>
    ),
  },
  {
    key: 'notFound',
    path: '*',
    component: <NotFound />,
  },
];
