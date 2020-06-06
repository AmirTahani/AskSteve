import { takeEvery, all } from 'redux-saga/effects';
import fetch from '../utils/fetch';

import { SEARCH_REPO, watchSearchRepo } from './Modules/search';
import { LOGIN, watchLogin } from './Modules/auth';
import { LOAD_COMMITS, watchLoadCommits } from './Modules/commits';


export default function* sagas() {
  yield all([
    takeEvery(SEARCH_REPO, watchSearchRepo, fetch),
    takeEvery(LOGIN, watchLogin, fetch),
    takeEvery(LOAD_COMMITS, watchLoadCommits, fetch),
  ]);
}
