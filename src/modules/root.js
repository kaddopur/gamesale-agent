import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import config from './config';
import quests from './quests';
import posts, { fetchPostEpic, fetchPreviousPostEpic } from './posts';
import ui from './ui';
import { syncBackgroundEpic } from './chrome';

export const rootEpic = combineEpics(
  fetchPostEpic,
  fetchPreviousPostEpic,
  syncBackgroundEpic,
);

export const rootReducer = combineReducers({
  config,
  posts,
  quests,
  ui,
});
