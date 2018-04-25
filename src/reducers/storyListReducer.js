import {
  LOADSTORIES_FUL
} from '../actions/stories';

const storyListReducer = (state, action) => {
  switch (action.type) {
    case LOADSTORIES_FUL:
      return {
        stories: action.stories
      };
    default:
      return state === undefined ? {stories: {}} : state;
  }
};

export default storyListReducer;
