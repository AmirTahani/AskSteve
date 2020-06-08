import { encode as btoa } from 'base-64';
import Toast from 'react-native-simple-toast';
import { put } from 'redux-saga/effects';
import { LOGOUT } from './logout';


export const LOGIN = 'AskSteve/auth/LOGIN';
export const LOGIN_SUCCESS = 'AskSteve/auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AskSteve/auth/LOGIN_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data
      };
    case LOGIN_FAILURE:
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


export function login(credentials) {
  return {
    type: LOGIN,
    credentials
  };
}


export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}


export function* watchLogin(fetch, { credentials }) {
  try {
    const headers = { authorization: `Basic ${btoa(`${credentials.username}:${credentials.password}`)};` };
    const result = yield fetch('/user', { headers });
    yield put(loginSuccess(result));
  } catch (e) {
    yield put(loginFailure(e));
    Toast.showWithGravity(e.message, Toast.LONG, Toast.TOP);
    console.log(e, 'this is errors');
  }
}
