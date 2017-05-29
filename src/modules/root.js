import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';
import quests from './quests';
import posts, {fetchPostEpic} from './posts';
import ui from './ui';

export const rootEpic = combineEpics(fetchPostEpic);

export const rootReducer = combineReducers({
  quests,
  posts,
  ui,
});
