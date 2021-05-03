import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* addBait(action) {
    try {
        yield axios.post('api/bait/add', action.payload)
    } catch (error) {
        console.log('Error with adding bait', error)
    }
}

function* baitAddSaga() {
    yield takeLatest('SUBMIT_BAIT', addBait);
}

export default baitAddSaga;