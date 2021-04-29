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
function* fetchSingleFish(action) {
  console.log('get single fish SAGA:', action);
  let fishId = action.payload;
  console.log(fishId)
  try {
    const response = yield axios.get(`/api/fish/specific/${fishId}`);
    console.log('response data', response.data)
    //yield put({ type: 'SET_SINGLE_FISH', payload: response.data})
  } catch (error) {
    console.log('User get request failed', error)
  }
}

function* fishSaga() {
  yield takeLatest('FETCH_FISH', fetchFish);
  yield takeLatest('FETCH_SINGLE_FISH', fetchSingleFish)
}

export default fishSaga;