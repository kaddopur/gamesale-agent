import {ajax} from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {pttParser} from '../lib/parser';
import _uniqBy from 'lodash/uniqBy';
import _orderBy from 'lodash/orderBy';

// Actions
const FETCH = 'gamesale-agent/posts/FETCH';
export const FETCH_SUCCESS = 'gamesale-agent/posts/FETCH_SUCCESS';

// Reducer
export default function reducer(state = [], action = {}) {
  let newState;
  switch (action.type) {
    case FETCH_SUCCESS:
      newState = _orderBy(_uniqBy([...action.payload.posts, ...state], 'key'));
      return _orderBy(newState, ['key'], ['desc']);
    default:
      return state;
  }
}

// Action Creators
const DEFAULT_POST_URL = 'https://www.ptt.cc/bbs/Gamesale/index.html';
export const fetchPost = (postUrl = DEFAULT_POST_URL) => ({
  type: FETCH,
  payload: {
    postUrl,
  },
});

export const fetchSuccess = ({posts, previousPage}) => ({
  type: FETCH_SUCCESS,
  payload: {
    posts,
    previousPage,
  },
});

// Epics
export const fetchPostEpic = (action$, store) =>
  action$.ofType(FETCH).debounceTime(store.getState().config.FETCH_INTERVEL_MS).mergeMap(action =>
    ajax({
      url: action.payload.postUrl,
      responseType: 'text',
    }).map(xhr => fetchSuccess(pttParser(xhr.response)))
  );
