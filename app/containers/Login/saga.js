import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { has } from 'lodash';
import { push, history } from 'connected-react-router';
import { loginSuccess, loginFailed, loginExceed } from './actions';
import { LOGIN_WATCHER, LOGIN_COMPANY_WATCHER } from './constants';
import {act} from "react-testing-library";

function messageSuccess(messagex) {
  message.success(messagex, 5);
}

function messageFailed(messagex) {
  console.log('message', messagex);
  message.error(messagex, 5);
}

function loginApi(authParams) {
  return axios.request({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: `http://localhost:8000/api/auth/login`,
    data: authParams,
  });
}


export function* loginSaga(action) {
  localStorage.setItem('alerta', action.payload['alerta'] );
  yield put(push('/dashboard'));
  // try {
  //   // const result = yield call(loginApi, action.payload);
  //   // const data = result.data;
  //   // const { status } = result.data;
  //
  //   switch (status) {
  //     case '200':
  //       const { data } = result;
  //       localStorage.setItem('userid', data.id_user);
  //       localStorage.setItem('token', data.access_token);
  //       localStorage.setItem('username', data.name_user);
  //       localStorage.setItem('email_user', data.email);
  //       yield put(loginSuccess(data));
  //       yield put(push('/dashboard'));
  //       message.success('Ingreso con exito', 5);
  //
  //       break;
  //     case 401:
  //       message.error('Usuario   o contraseña incorrecto', 5);
  //       // yield call(messageFailed, );
  //       yield put(loginFailed());
  //       break;
  //   }
  // } catch (e) {
  //   // yield call(messageFailed, 'Error en el servidor');
  //   // yield put(loginFailed());
  // }
}

export default function* loginWatcherSaga() {
  yield takeLatest(LOGIN_WATCHER, loginSaga);
}
