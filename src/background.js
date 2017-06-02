import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import configureStore from './configureStore';
import { fetchPost } from './modules/posts';
import { unreadPostCountSelector } from './selectors';
import { updateBadge } from './lib/chrome';

const store = configureStore();
const { config: { BACKGROUND_CHECK_INTERVEL_MS } } = store.getState();

store.subscribe(val => {
  updateBadge({
    unreadCount: unreadPostCountSelector(store.getState()),
  });
});

Observable.interval(BACKGROUND_CHECK_INTERVEL_MS)
  .startWith(0)
  .subscribe(val => {
    store.dispatch(fetchPost());
  });
