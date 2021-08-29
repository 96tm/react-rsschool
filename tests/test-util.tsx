import React, { ReactNode } from 'react';
import {
  createStore,
  applyMiddleware,
  AnyAction,
  Store,
  PreloadedState,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  render as testingRender,
  RenderResult,
  RenderOptions,
  queries,
} from '@testing-library/react';

import { Store as AppStore } from '../src/redux/store';
import rootReducer from '../src/redux/reducers';

interface IDefaultProps {
  children?: ReactNode;
}

const render = (
  ui: React.ReactElement,
  {
    preloadedStore = {},
    store = createStore(
      rootReducer,
      preloadedStore,
      composeWithDevTools(applyMiddleware(thunk))
    ),
    ...renderOptions
  }: RenderOptions<typeof queries, HTMLElement> & {
    preloadedStore?: PreloadedState<AppStore>;
    store?: Store<AppStore, AnyAction>;
  } = {}
): RenderResult<typeof queries, HTMLElement> => {
  const Wrapper = ({ children = undefined }: IDefaultProps): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );
  Wrapper.defaultProps = { children: undefined };
  return testingRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
