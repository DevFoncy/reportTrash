/*
 *
 * Service reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SERVICES_SUCCESS,
  SERVICES_WATCHER,
} from './constants';

export const initialState = fromJS({
  loadingServices: false,
  services: [],
});

/* eslint-disable default-case, no-param-reassign */
function serviceReducer(state = initialState, action) {
  // console.log("action.payload",action.payload);
  switch (action.type) {
    case SERVICES_WATCHER:
      return state.set('loadingServices', true).set('services', []);
    case SERVICES_SUCCESS:
      return state
        .set('loadingServices', false)
        .set('services', action.payload);
    default:
      return state;
  }
}

export default serviceReducer;
