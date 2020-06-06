import { stringifyQuery } from "../../utils/query";
import { put } from 'redux-saga/effects';
import { LOGOUT } from './logout';

export const SEARCH_REPO = 'AskSteve/search/SEARCH_REPO';
export const SEARCH_REPO_SUCCESS = 'AskSteve/search/SEARCH_REPO_SUCCESS';
export const SEARCH_REPO_FAILURE = 'AskSteve/search/SEARCH_REPO_FAILURE';


const initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_REPO:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
      };
    case SEARCH_REPO_FAILURE:
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


export function searchRepo(query) {
  return {
    type: SEARCH_REPO,
    query
  };
}

export function searchRepoSuccess(data) {
  return {
    type: SEARCH_REPO_SUCCESS,
    data
  };
}

export function searchRepoFailure(error) {
  return {
    type: SEARCH_REPO_FAILURE,
    error
  };
}

export function* watchSearchRepo(fetch, { query }) {
  try {
    const queryString = stringifyQuery(query);
    const result = yield fetch(`/search/repositories${queryString}`);
    yield put(searchRepoSuccess(result.items));
  } catch (e) {
    yield put(searchRepoFailure(e));
  }
}
