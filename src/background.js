import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import configureStore from './configureStore';
import { fetchPost } from './modules/posts';

const store = configureStore();
const { config: { BACKGROUND_CHECK_INTERVEL_MS } } = store.getState();

Observable.interval(BACKGROUND_CHECK_INTERVEL_MS).subscribe(val => {
  store.dispatch(fetchPost());
});
