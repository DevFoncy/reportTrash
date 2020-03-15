// Individual exports for testing
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import {
  LOGOUT_WATCHER,
  TICKET_WATCHER,
  ASSIGN_TICKET_WATCHER,
  ATTEND_TICKET_WATCHER,
} from './constants';
import { getTicketSuccess, assignTicketSuccess } from './actions';

function logoutApi() {
  return axios.request({
    method: 'get',
    url: `http://localhost:8000/api/auth/logout`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
}

function ticketsApi() {
  return axios.request({
    method: 'get',
    url: `http://localhost:8000/api/tickets`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
}

function assignTicketsApi(params) {
  return axios.request({
    method: 'post',
    url: `http://localhost:8000/api/tickets/assignee/${params.ticket_id}`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    data: params.object,
  });
}

function attendTicketsApi(params) {
  return axios.request({
    method: 'post',
    url: `http://localhost:8000/api/tickets/attend/${params.ticket_id}`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    data: params.object,
  });
}

export function* logoutSaga() {
  try {
    const { data } = yield call(logoutApi);
    localStorage.clear();
    yield put(push('/login'));
    message.success('Vuelva pronto', 5);
  } catch (e) {
    console.log('e', e);
  }
}

// GET TICKETS
export function* getTickets() {
  try {
    const { data } = yield call(ticketsApi);
    yield put(getTicketSuccess(data));
    message.success('Tickets cargado con exito', 3);
  } catch (error) {
    // returnMessage(error);
    // getPlansFailed({})
  }
}

// GET TICKETS
export function* assignTicket(params) {
  try {
    const { data } = yield call(assignTicketsApi, params.payload);
    // console.log("dataaa",data);
    yield put(assignTicketSuccess(data));
    // yield put(push('/dashboard/create/ticket'));
    message.success('Tickets asignado con exito', 3);
  } catch (error) {
    // returnMessage(error);
    // getPlansFailed({})
  }
}

// GET TICKETS
export function* attendTicket(params) {
  try {
    const { data } = yield call(attendTicketsApi, params.payload);
    // yield put(assignTicketSuccess(data));
    // yield put(push('/dashboard/create/ticket'));
    yield put(push('/dashboard/services'));
    message.success('Creacion de solicitud del servicio con exito', 3);
  } catch (error) {
    // returnMessage(error);
    // getPlansFailed({})
    message.error('Error al momento de atender el ticket', 3);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(TICKET_WATCHER, getTickets);
  yield takeLatest(LOGOUT_WATCHER, logoutSaga);
  yield takeLatest(ASSIGN_TICKET_WATCHER, assignTicket);
  yield takeLatest(ATTEND_TICKET_WATCHER, attendTicket);
}
