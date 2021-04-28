import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addCatch(action) {
  try{
    console.log( 'addCatch', action.payload)
    yield axios.post(`/api/catches`, action.payload);
    //yield put({ type: 'SET_CATCH', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

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
  yield takeLatest('ADD_CATCH', addCatch);
}

export default catchSaga;