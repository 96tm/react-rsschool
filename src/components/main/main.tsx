import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Store } from '../../redux/store';
import { ROUTER_TRANSITION_TIMEOUT } from '../../shared/constants';
import { ROUTES } from '../../shared/routes';
import ErrorMessage from '../error-message/error-message';
import './main.css';

function Main(): JSX.Element {
  const { error } = useSelector((state: Store) => state);
  const location = useLocation();

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
            {ROUTES.map((route) => (
              <Route
                key={route.key}
                exact={route.props?.exact}
                path={route.path}
              >
                {route.component}
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
export default Main;
