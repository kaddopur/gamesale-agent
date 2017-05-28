import {combineReducers} from 'redux';
import quests from './ducks/quests';
import posts from './ducks/posts';
import ui from './ducks/ui';

const rootReducer = combineReducers({quests, posts, ui});
export default rootReducer;
