/*
 *
 * Service actions
 *
 */

import {
  DEFAULT_ACTION,
  SERVICES_SUCCESS,
  SERVICES_WATCHER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getServicesWatcher() {
  return {
    type: SERVICES_WATCHER,
  };
}

export function getServicesSuccess(payload) {
  return {
    type: SERVICES_SUCCESS,
    payload,
  };
}
