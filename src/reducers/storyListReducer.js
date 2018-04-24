import {
  LOADSTORIES_FUL,
} from '../actions/stories';

const storyListReducer = (state = {
  storyIDs: [],
}, action) => {
  switch (action.type) {
  case LOADSTORIES_FUL:
    return {
      storyIDs: action.storyIDs
    };
  default:
    return state;
  }
};

export default storyListReducer;
