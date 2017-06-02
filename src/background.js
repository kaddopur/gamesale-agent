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

storeSubscription = store.subscribe(() => {
  updateBadge({
    unreadCount: unreadPostCountSelector(store.getState()),
  });
});

// sync from popup
if (chrome && chrome.runtime && chrome.runtime.onConnect) {
  chrome.runtime.onConnect.addListener(port => {
    if (port.name !== CHANNEL) {
      return;
    }
    port.onMessage.addListener(msg => {
      switch (msg.type) {
        case SYNC_BACKGROUND:
          persistor.rehydrate(msg.payload.state);
        default:
          return;
      }
    });
  });
}
