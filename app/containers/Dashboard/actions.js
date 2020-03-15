/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGOUT_WATCHER,
  TICKET_SUCCESS,
  TICKET_WATCHER,
  ASSIGN_TICKET_FAILED,
  ASSIGN_TICKET_SUCCESS,
  ASSIGN_TICKET_WATCHER,
  ATTEND_TICKET_FAILED,
  ATTEND_TICKET_SUCCESS,
  ATTEND_TICKET_WATCHER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function logoutWatcher() {
  return {
    type: LOGOUT_WATCHER,
  };
}

export function getTicketWatcher() {
  return {
    type: TICKET_WATCHER,
  };
}

export function getTicketSuccess(payload) {
  return {
    type: TICKET_SUCCESS,
    payload,
  };
}

export function assignTicketWatcher(params) {
  return {
    type: ASSIGN_TICKET_WATCHER,
    payload: params,
  };
}

export function assignTicketSuccess(payload) {
  return {
    type: ASSIGN_TICKET_SUCCESS,
    payload,
  };
}

// attendTicket

export function attendTicketWatcher(params) {
  return {
    type: ATTEND_TICKET_WATCHER,
    payload: params,
  };
}

export function attendTicketSuccess(payload) {
  return {
    type: ATTEND_TICKET_SUCCESS,
    payload,
  };
}
