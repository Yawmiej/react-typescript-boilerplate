export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_LOGIN = 'AUTH_LOGIN';

export interface User {
  name?: string;
  username?: string;
  id?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

interface SetAuthentication {
  type: typeof AUTH_CHECK;
  payload: boolean;
}

interface LoginUser {
  type: typeof AUTH_LOGIN;
  payload: User;
}

export type AuthActionTypes = SetAuthentication | LoginUser;
