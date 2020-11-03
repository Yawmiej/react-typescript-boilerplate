import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from './rootReducers';

export default function (
  initialState: RootState = {
    auth: {
      isAuthenticated: false,
      user: {},
    },
  }
) {
  const sagaMiddleWare = createSagaMiddleware();
  const enhancers = [applyMiddleware(sagaMiddleWare)];

  // if (process.env.NODE_ENV !== 'production') {
  //   enhancers.push(applyMiddleware(createLogger()));
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   window.__REDUX_DEVTOOLS_EXTENSION__! &&
  //     enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  // }
  enhancers.push(applyMiddleware(createLogger()));

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(...enhancers)
  );

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducers', async () => {
      // import nextReducer = require('./rootReducers').default; // eslint-disable-line global-require
      const nextReducer = (await import('./rootReducers')).rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  console.log(store);

  return store;
}
