import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SERVICES_WATCHER, SERVICES_SUCCESS } from './constants';
import { getServicesSuccess } from './actions';

function servicesApi() {
  return axios.request({
    method: 'get',
    url: `http://localhost:8000/api/attend`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
}

export function* getServices() {
  try {
    const { data } = yield call(servicesApi);
    yield put(getServicesSuccess(data));
    message.success('Solicitud de servicio cargado con exito', 5);
  } catch (error) {
    message.error('Error al cargar', 5);

    // returnMessage(error);
    // getPlansFailed({})
  }
}

// Individual exports for testing
export default function* serviceSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SERVICES_WATCHER, getServices);
}
