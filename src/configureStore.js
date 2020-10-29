import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory(process.env.NODE_ENV === 'production' ? {
  basename: process.env.REACT_APP_BASE_NAME
} : {});

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/**
 * 配置全局状态存储
 * @param preloadedState
 * @returns {(Store<, AnyAction> & Store<S & StateExt, A> & Ext) | (Store<, AnyAction> & Store<S & {}, A> & Ext)}
 */
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        // for dispatching history actions
        routerMiddleware(history)
        // ... other middlewares ...
      )
    )
  );

  return store;
}
