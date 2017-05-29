import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';
import quests from './quests';
import posts from './posts';
import ui from './ui';

import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';

const pingEpic = action$ =>
  action$.ofType('gamesale-agent/ui/CHANGE_TAB').delay(1000).mapTo({type: 'PONG'});

export const rootEpic = combineEpics(pingEpic);

export const rootReducer = combineReducers({
  quests,
  posts,
  ui,
});
