import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the account state domain
 */

const selectAccountDomain = state => state.account || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Account
 */

const makeSelectAccount = () =>
  createSelector(
    selectAccountDomain,
    substate => substate,
  );

export default makeSelectAccount;
export { selectAccountDomain };
