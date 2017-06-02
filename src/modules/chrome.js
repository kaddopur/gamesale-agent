import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/empty';

// Actions
export const SYNC_BACKGROUND = 'gamesale-agent/chrome/SYNC_BACKGROUND';
export const CHANNEL = 'gamesale-agent/chrome/CHANNEL';

export const syncBackground = () => ({
  type: SYNC_BACKGROUND,
});

// Epics
export const syncBackgroundEpic = (action$, store) => {
  if (!chrome || !chrome.runtime || !chrome.runtime.onConnect) {
    return Observable.empty();
  }
  const port = chrome.runtime.connect({ name: CHANNEL });
  return action$.ofType(SYNC_BACKGROUND).debounceTime(100).mergeMap(action => {
    port.postMessage({
      type: SYNC_BACKGROUND,
      payload: {
        state: store.getState(),
      },
    });
    return Observable.empty();
  });
};
