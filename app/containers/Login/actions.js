/*
 *
 * Login actions
 *
 */

import { LOGIN_WATCHER, LOGIN_FAILED, LOGIN_SUCCESS } from './constants';

export function loginWatcher(authParams) {
  return {
    type: LOGIN_WATCHER,
    payload: authParams,
  };
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED,
  };
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
}
