import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LAKES"
function* fetchCatch() {
  try {
    console.log( 'in fetchCatch' );
    const response = yield axios.get('/api/catches');
    yield put({ type: 'SET_CATCH', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* catchSaga() {
  yield takeLatest('FETCH_CATCH', fetchCatch);
}

export default catchSaga;