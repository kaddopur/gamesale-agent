import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttleTime';
import configureStore from './configureStore';
import { fetchPost } from './modules/posts';
import { unreadPostCountSelector } from './selectors';
import { SYNC_BACKGROUND, CHANNEL } from './modules/chrome';
import { updateBadge } from './lib/bgUtils';

const { store, persistor } = configureStore();
const { config: { BACKGROUND_CHECK_INTERVEL_MS } } = store.getState();
let storeSubscription;
let rxSubscription;
let connection;

storeSubscription = store.subscribe(() => {
  const state = store.getState();
  const { posts } = state;

  updateBadge({
    unreadCount: unreadPostCountSelector(state),
  });
});

// sync from popup
if (chrome && chrome.runtime && chrome.runtime.onConnect) {
  chrome.runtime.onConnect.addListener(port => {
    if (port.name !== CHANNEL) {
      return;
    }
    connection = port;

    port.onMessage.addListener(msg => {
      switch (msg.type) {
        case SYNC_BACKGROUND:
          persistor.rehydrate(msg.payload.state);
        default:
          return;
      }
    });

    port.onDisconnect.addListener(port => {
      connection = undefined;
    });
  });
}
