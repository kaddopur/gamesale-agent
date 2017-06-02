import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import configureStore from './configureStore';
import { fetchPost } from './modules/posts';
import { unreadPostCountSelector } from './selectors';

const store = configureStore();
const { config: { BACKGROUND_CHECK_INTERVEL_MS } } = store.getState();

const displayNotification = () => {
  if (!chrome || !chrome.notifications) {
    return;
  }

  chrome.notifications.create({
    type: 'basic',
    iconUrl: chrome.runtime.getURL('images/48.png'),
    title: 'foo titoe',
    message: 'asdfasdfasdfasf',
  });
};

const updateBadge = ({ unreadCount }) => {
  if (!chrome || !chrome.browserAction) {
    return;
  }

  chrome.browserAction.setBadgeText({
    text: unreadCount ? `${unreadCount}` : '',
  });
};

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
