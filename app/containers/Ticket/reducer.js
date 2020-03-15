/*
 *
 * Ticket reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATE_TICKET_WATCHER,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAILED,
} from './constants';

export const initialState = fromJS({
  loadingTicket: false,
  errorTicket: '',
});

function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TICKET_WATCHER:
      return state.set('loadingTicket', true);
    case CREATE_TICKET_SUCCESS:
      return state.set('loadingTicket', false);
    case CREATE_TICKET_FAILED:
      return state
        .set('errorTicket', action.payload.error)
        .set('loadingTicket', false);
    default:
      return state;
  }
}

export default ticketReducer;
