import { combineReducers } from 'redux';
import { authReducer } from '../modules/web/store/reducers';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
