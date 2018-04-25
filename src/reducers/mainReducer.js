import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storyListReducer from './storyListReducer';
import linkReducer from './linkReducer';

// TODO add more reducers as needed
const reducers = combineReducers({
  authReducer,
  storyListReducer,
  linkReducer
});

export default reducers;