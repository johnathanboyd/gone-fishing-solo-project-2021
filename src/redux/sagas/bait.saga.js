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
function* fetchSpecificBaits(action) {
  const fishId = action.payload;
  console.log(fishId)
  try {
    console.log( 'in fetchSpecificBaits' );
    const response = yield axios.get(`/api/baits/specific/${fishId}`);
    console.log('response data', response.data)
    yield put({ type: 'SET_SPECIFIC_BAIT', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* baitSaga() {
  yield takeLatest('FETCH_BAITS', fetchBaits);
  yield takeLatest('FETCH_SPECIFIC_BAIT', fetchSpecificBaits)
}

export default baitSaga;
