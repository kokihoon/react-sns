import { all, fork, takeEvery, call, put, delay } from "reudx-saga/effects";

import axios from "axios";
import * as actions from "../reducers/user";

function loginApi() {
  return axios.pust(
    "https://prographytodolist.azurewebsites.net/swagger/swagger/"
  );
}

function* login({ payload }) {
  try {
    yield call(loginApi);

    yield put({
      type: actions.LOG_IN_SUCCESS
    });
  } catch (error) {
    yield put({
      type: actions.LOGIN_FAILURE,
      error
    });
  }
}

function* watchLogin() {
  yield takeEvery(actions.LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
