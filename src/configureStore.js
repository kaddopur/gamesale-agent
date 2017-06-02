import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localforage';
import { rootReducer, rootEpic } from './modules/root';

export default function configureStore(state) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const store = createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(epicMiddleware), autoRehydrate()),
  );
  const persistor = persistStore(store, { storage: localForage });

  return {
    store,
    persistor,
  };
}
