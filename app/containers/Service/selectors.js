import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { selectDashboardDomain } from '../Dashboard/selectors';

/**
 * Direct selector to the service state domain
 */

const selectServiceDomain = state => state.services || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Service
 */

export const makeSelectServices = () =>
  createSelector(
    selectServiceDomain,
    state => state.get('services'),
  );

const makeSelectService = () =>
  createSelector(
    selectServiceDomain,
    substate => substate,
  );

export default makeSelectService;
export { selectServiceDomain };
