import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */
export const makeSelectError = () =>
  createSelector(
    selectLoginDomain,
    loginState => loginState.get('error'),
  );

export const makeSelectErrorExceed = () =>
  createSelector(
    selectLoginDomain,
    loginState => loginState.get('errorExceed'),
  );

export const makeSelectErrorMessage = () =>
  createSelector(
    selectLoginDomain,
    loginState => loginState.get('errorMessage'),
  );

export const makeSelectLoading = () =>
  createSelector(
    selectLoginDomain,
    loginState => loginState.get('isLoading'),
  );

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

export default makeSelectLogin;
export { selectLoginDomain };
