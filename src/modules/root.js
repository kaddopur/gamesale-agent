import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import config from './config';
import quests from './quests';
import posts, { fetchPostEpic, fetchPreviousPostEpic } from './posts';
import ui from './ui';

export const rootEpic = combineEpics(fetchPostEpic, fetchPreviousPostEpic);

export const rootReducer = combineReducers({
  config,
  posts,
  quests,
  ui,
});
