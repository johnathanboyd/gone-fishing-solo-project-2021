import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFish(action) {
  try {
    yield axios.post('api/fish/add', action.payload);
   } catch (error) {
     console.log('Error with adding fish', error)
   }
}

function* fishAddSaga() {
  yield takeLatest('SUBMIT_FISH', addFish);
}

export default fishAddSaga;