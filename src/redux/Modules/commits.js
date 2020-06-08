import { put } from 'redux-saga/effects';
import { LOGOUT } from './logout';
import Toast from "react-native-simple-toast";

export const LOAD_COMMITS = 'AskSteve/commits/LOAD_COMMITS';
export const LOAD_COMMITS_SUCCESS = 'AskSteve/commits/LOAD_COMMITS_SUCCESS';
export const LOAD_COMMITS_FAILURE = 'AskSteve/commits/LOAD_COMMITS_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
  reachedLastPage: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_COMMITS:
      return {
        ...state,
        loading: true
      };
    case LOAD_COMMITS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...state.data, ...action.data],
        reachedLastPage: !action.data.length
      };
    case LOAD_COMMITS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export function loadCommits({ repo, owner, page }) {
  return {
    type: LOAD_COMMITS,
    repo,
    owner,
    page
  };
}

export function loadCommitsSuccess(data) {
  return {
    type: LOAD_COMMITS_SUCCESS,
    data
  };
}

export function loadCommitsFailure(error) {
  return {
    type: LOAD_COMMITS_FAILURE,
    error
  };
}


export function* watchLoadCommits(fetch, { repo, owner, page }) {
  try {
    const result = yield fetch(`/repos/${owner}/${repo}/commits?page=${page}`);
    yield put(loadCommitsSuccess(result));
  } catch (e) {
    yield put(loadCommitsFailure(e));
    Toast.showWithGravity(e.message, Toast.LONG, Toast.TOP);

  }
}
