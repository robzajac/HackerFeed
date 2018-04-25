import {
  LOADSTORY_FUL,
} from '../actions/stories';

const storyReducer = (state = {
  story: {}
}, action) => {
  switch (action.type) {
  case LOADSTORY_FUL:
    return {
      story: action.story
    };
  default:
    return state;
  }
};

export default storyReducer;