import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CONCERN_UPDATE,
  UPDATE_USER
} from '../actions/type';

const initialState = {
  isLogin: false,
  user: null,
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        profile: action.payload.profile,
        isLogin: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        profile: null,
        isLogin: false
      };
    case CONCERN_UPDATE:
      return {
        ...state,
        profile: action.payload
      };
    case UPDATE_USER:
      return {
        ...state,
        // user:action.payload.user,
        profile:action.payload
      }
    default:
      return state;
  }
}
