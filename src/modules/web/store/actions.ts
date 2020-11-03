import { User, AuthActionTypes, AUTH_CHECK, AUTH_LOGIN } from './types';

export function setAuth(payload: boolean): AuthActionTypes {
  return {
    type: AUTH_CHECK,
    payload,
  };
}

export function loginUser(payload: User): AuthActionTypes {
  return {
    type: AUTH_LOGIN,
    payload,
  };
}
