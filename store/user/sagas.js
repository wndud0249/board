import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from './types';
import { loginApi } from '../../lib/api/userApi';

function* login(action) {
  try {
    const result = yield call(loginApi, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* userRequest() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([userRequest()]);
}
