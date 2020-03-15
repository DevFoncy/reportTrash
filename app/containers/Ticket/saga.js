import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { CREATE_TICKET_WATCHER } from './constants';
import { createTicketSuccess, createTicketFailed } from './actions';

function messageSuccess(messagex) {
  message.success(messagex, 5);
}

function messageFailed(messagex) {
  console.log('message', messagex);
  message.error(messagex, 5);
}

function apiCreateTicket(params) {
  return axios.request({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: `http://localhost:8000/api/ticket`,
    data: params,
  });
}

export function* createTicket(params) {
  console.log('params', params);
  try {
    const message = yield call(apiCreateTicket, params.payload);
    console.log('message', message);
    if (message.status === 200) {
      messageSuccess('Ticket creado con exito');
      yield put(push('/dashboard'));
    } else {
      messageFailed('Ticket no registrado');
    }
    // let result = {}
    // yield put(exportReportSuccess(result))
  } catch (e) {
    console.log('error', e);
    // yield put(exportReportFailed())
  }
}

// Individual exports for testing
export default function* ticketSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CREATE_TICKET_WATCHER, createTicket);
}
