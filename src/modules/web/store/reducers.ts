import {
  AuthState,
  AuthActionTypes,
  AUTH_LOGIN,
  AUTH_CHECK,
  User,
} from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
};

const checkAuth = (state: AuthState, payload: boolean): AuthState => {
  return {
    ...state,
    isAuthenticated: payload,
  };
};

const loginUser = (state: AuthState, payload: User): AuthState => {
  return {
    ...state,
    user: payload,
  };
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case AUTH_CHECK:
      return checkAuth(state, action.payload);
    case AUTH_LOGIN:
      return loginUser(state, action.payload);
    default:
      return state;
  }
}
