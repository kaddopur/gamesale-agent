import {createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import localForage from 'localforage';
import rootReducer from './reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(autoRehydrate()));
  persistStore(store, {storage: localForage});
  return store;
}
