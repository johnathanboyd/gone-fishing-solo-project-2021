import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LAKES"
function* fetchFish() {
  try {
    console.log( 'in fetchFish' );
    const response = yield axios.get('/api/fish');
    yield put({ type: 'SET_FISH', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fishSaga() {
  yield takeLatest('FETCH_FISH', fetchFish);
}

export default fishSaga;