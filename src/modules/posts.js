import {ajax} from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {pttParser} from '../lib/parser';
import _uniqBy from 'lodash/uniqBy';
import _sortBy from 'lodash/sortBy';

// Actions
const FETCH = 'gamesale-agent/posts/FETCH';
const FETCH_SUCCESS = 'gamesale-agent/posts/FETCH_SUCCESS';

// Reducer
export default function reducer(state = [], action = {}) {
  let newState;
  switch (action.type) {
    case FETCH_SUCCESS:
      newState = _uniqBy([...action.payload.posts, ...state], 'key');
      _sortBy(newState, 'key');
      return newState;
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

export const fetchSuccess = posts => ({
  type: FETCH_SUCCESS,
  payload: {
    posts,
  },
});

// Epics
export const fetchPostEpic = action$ =>
  action$.ofType(FETCH).mergeMap(action =>
    ajax({
      url: action.payload.postUrl,
      responseType: 'text',
    }).map(xhr => fetchSuccess(pttParser(xhr.response)))
  );
