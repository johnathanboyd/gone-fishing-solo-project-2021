import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LAKES"
function* fetchBaits() {
  try {
    console.log( 'in fetchBaits' );
    const response = yield axios.get('/api/baits');
    yield put({ type: 'SET_BAITS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* baitSaga() {
  yield takeLatest('FETCH_BAITS', fetchBaits);
}

export default baitSaga;
