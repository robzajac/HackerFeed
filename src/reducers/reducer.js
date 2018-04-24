import {
  LOGIN_FUL,
  LOGIN_REJ,
  LOGOUT_FUL,
  REGISTER_FUL,
  REGISTER_REJ,
} from '../actions/auth';

const mainReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_FUL:
    case REGISTER_FUL:
      return Object.assign({}, state, {
        isAuthenticated: true,
      });
    case REGISTER_REJ:
    case LOGOUT_FUL:
    case LOGIN_REJ:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }

  return state;
};

export { mainReducer };