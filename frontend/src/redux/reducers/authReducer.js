import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/authConstants";

const initialState = {
  userInfo: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        error: null,
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
      return {
        ...state,
        userInfo: null,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: null,
        error: null,
      };
    default:
      return state;
  }
};
