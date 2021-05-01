import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateFish(action) {
  let fishId = action.payload;
  console.log(fishId);
  try {
    yield axios.put(`api/fish/specific/${fishId}/update`, fishId); 
   } catch (error) {
     console.log('Error with adding fish', error)
   }
}

function* fishUpdateSaga() {
  yield takeLatest('UPDATE_FISH', updateFish);
}

export default fishUpdateSaga;