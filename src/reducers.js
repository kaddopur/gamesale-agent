import {combineReducers} from 'redux';
import quests from './ducks/quests';
import posts from './ducks/posts';

const rootReducer = combineReducers({quests, posts});
export default rootReducer;
