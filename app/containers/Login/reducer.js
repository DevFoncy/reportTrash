/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_WATCHER,
  LOGIN_EXCEED,
  LOGIN_RESET,
} from './constants';

export const initialState = fromJS({
  isLoggedIn: false,
  error: false,
  isLoading: false,
  errorExceed: false,
  errorMessage: '',
});
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('isLoggedIn', true).set('isLoading', false);
    case LOGIN_FAILED:
      return state
        .set('isLoggedIn', false)
        .set('error', true)
        .set('isLoading', false)
        .set('errorExceed', false);
    case LOGIN_WATCHER:
      return state.set('error', false).set('isLoading', true);
    default:
      return state;
  }
}

export default loginReducer;
