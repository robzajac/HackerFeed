import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storyListReducer from './storyListReducer';
import linkReducer from './linkReducer';
import messageReducer from './messageReducer';

// TODO add more reducers as needed
const reducers = combineReducers({
  authReducer,
  storyListReducer,
  linkReducer,
  messageReducer
});

export default reducers;