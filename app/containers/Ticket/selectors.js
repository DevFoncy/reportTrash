import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ticket state domain
 */

const selectTicketDomain = state => state.ticket || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Ticket
 */

const makeSelectTicket = () =>
  createSelector(
    selectTicketDomain,
    substate => substate,
  );

export default makeSelectTicket;
export { selectTicketDomain };
