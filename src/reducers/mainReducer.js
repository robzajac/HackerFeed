import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storyListReducer from './storyListReducer';
import storyReducer from './storyReducer';

// TODO add more reducers as needed
const reducers = combineReducers({
  authReducer,
  storyListReducer
});

export default reducers;