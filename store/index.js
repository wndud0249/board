import { combineReducers } from 'redux';
import userReducer from './user/reducers';
import { all, fork } from 'redux-saga/effects';
import userSaga from './user/sagas';

const rootReducer = combineReducers({
  user: userReducer,
});

export function* rootSaga() {
  yield all([fork(userSaga)]);
}

export default rootReducer;
