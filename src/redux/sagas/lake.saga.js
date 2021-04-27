import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LAKES"
function* fetchLakes() {
  try {
    console.log( 'in fetchLakes' );
    const response = yield axios.get('/api/lake');
    yield put({ type: 'SET_LAKES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* lakeSaga() {
  yield takeLatest('FETCH_LAKES', fetchLakes);
}

export default lakeSaga;
