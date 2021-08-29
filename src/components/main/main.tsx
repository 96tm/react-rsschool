import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { ROUTER_TRANSITION_TIMEOUT } from '../../shared/constants';
import SearchResults from '../search-results/search-results';
import ErrorMessage from '../error-message/error-message';
import SearchResultInfo from '../search-results/search-result-info/search-result-info';
import PageNotFound from '../pages/not-found/not-found';
import SearchHeader from '../search-header/search-header';
import './main.css';
import About from '../pages/about/about';
import { Store } from '../../redux/store';
import ApiService from '../../shared/api-service';

function Main(): JSX.Element {
  const { error } = useSelector((state: Store) => state);
  const state = useSelector((stateVariable: Store) => stateVariable);
  const location = useLocation();
  const url = ApiService.getPhotosUrl(state, state.lastSearchInput);

  return (
    <main className="main">
      {error && <ErrorMessage message={String(error)} />}
      <TransitionGroup className="transition-group">
        <CSSTransition
          timeout={ROUTER_TRANSITION_TIMEOUT}
          classNames="page"
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/">
              <div className="page">
                <SearchHeader />
                <SearchResults url={url} />
              </div>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details/:id">
              <div className="page">
                <SearchResultInfo />
              </div>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
export default Main;
