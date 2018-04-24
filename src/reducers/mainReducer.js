import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storyListReducer from './storyListReducer';

// TODO add more reducers as needed
const reducers = combineReducers({
  authReducer,
  storyListReducer
});

export default reducers;