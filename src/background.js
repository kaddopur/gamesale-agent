import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttleTime';
import configureStore from './configureStore';
import { fetchPost } from './modules/posts';
import { unreadPostCountSelector } from './selectors';
import { updateBadge } from './lib/chrome';

let store;
let storeSubscription;
let rxSubscription;

function _startBackgroundFetch(initialState) {
  store = configureStore(initialState);
  const { config: { BACKGROUND_CHECK_INTERVEL_MS } } = store.getState();

  storeSubscription = store.subscribe(() => {
    updateBadge({
      unreadCount: unreadPostCountSelector(store.getState()),
    });
  });

  rxSubscription = Observable.interval(
    BACKGROUND_CHECK_INTERVEL_MS,
  ).subscribe(val => {
    store.dispatch(fetchPost());
  });
}

function _stopBackgroundFetch() {
  storeSubscription && storeSubscription();
  rxSubscription && rxSubscription.unsubscribe();
}

function restartBackgroundFetch(initialState) {
  _stopBackgroundFetch();
  _startBackgroundFetch(initialState);
}

restartBackgroundFetch();
