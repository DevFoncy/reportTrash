/*
 *
 * Dashboard reducer
 *
 */
import { fromJS } from 'immutable';
import {
  TICKET_WATCHER,
  TICKET_SUCCESS,
  ASSIGN_TICKET_SUCCESS,
  ASSIGN_TICKET_WATCHER,
  ASSIGN_TICKET_FAILED,
  ATTEND_TICKET_WATCHER,
  ATTEND_TICKET_SUCCESS,
  ATTEND_TICKET_FAILED,
} from './constants';

export const initialState = fromJS({
  loadingTickets: false,
  loadingAssignTicket: false,
  tickets: [],
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case TICKET_WATCHER:
      return state.set('loadingTickets', true).set('tickets', []);
    case TICKET_SUCCESS:
      return state.set('loadingTickets', false).set('tickets', action.payload);
    case ASSIGN_TICKET_WATCHER:
      return state.set('loadingAssignTicket ', true);
    case ASSIGN_TICKET_SUCCESS:
      return state.set('loadingAssignTicket ', false);
    case ATTEND_TICKET_WATCHER:
      return state.set('loadingAttendTicket ', true);
    case ATTEND_TICKET_SUCCESS:
      return state.set('loadingAttendTicket ', false);
    default:
      return state;
  }
}

export default dashboardReducer;
