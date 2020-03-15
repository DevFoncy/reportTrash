/*
 *
 * Ticket actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_TICKET_FAILED,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_WATCHER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// export
export function createTicketWatcher(payload) {
  return {
    type: CREATE_TICKET_WATCHER,
    payload,
  };
}

export function createTicketSuccess(payload) {
  return {
    type: CREATE_TICKET_SUCCESS,
    payload,
  };
}

export function createTicketFailed() {
  return {
    type: CREATE_TICKET_FAILED,
  };
}
