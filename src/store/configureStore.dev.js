// This file configures the store for hot reloading.
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';


const configureStore = initialState => {

  const middlewares = [promiseMiddleware];

  // to support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  //logger must be last in the middleware chain
  middlewares.push(createLogger());

  const store = createStore(rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;
