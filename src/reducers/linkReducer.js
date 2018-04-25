import {
  GETLINKS_FUL
} from '../actions/links';

const linkReducer = (state, action) => {
  switch (action.type) {
    case GETLINKS_FUL:
      return {
        links: action.links
      };
    default:
      return state === undefined ? {links: []} : state;
  }
};

export default linkReducer;
