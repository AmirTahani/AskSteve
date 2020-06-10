import sagaHelper from 'redux-saga-testing';
import fetch from '../../../src/utils/fetch';

jest.mock('../../../src/utils/fetch');

import authReducer, {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginFailure,
  loginSuccess,
  login,
  watchLogin
} from '../../../src/redux/Modules/auth';

jest.mock('react-native-simple-toast', () => {
  SHORT: jest.fn()
});

describe('actions', () => {
  it('should create an action to login', () => {
    const credentials = {
      username: 'amir',
      password: '****'
    };
    const expectedAction = {
      type: LOGIN,
      credentials
    };
    expect(login(credentials)).toEqual(expectedAction)
  });

  it('should create an action to success login', () => {
    const user = {
      id: 1,
      name: 'amir'
    };
    const expectedAction = {
      type: LOGIN_SUCCESS,
      data: user
    };
    expect(loginSuccess(user)).toEqual(expectedAction);
  });

  it('should createe an action to failure login', () => {
    const error = {
      message: 'bad credentials',
    };
    const expectedAction = {
      type: LOGIN_FAILURE,
      error
    };
    expect(loginFailure(error)).toEqual(expectedAction);
  });
});

describe('auth reducer', () => {
  const initialState = {
    loading: false,
    loaded: false,
    data: {},
    error: null
  };

  const credentials = {
    username: 'amir',
    password: '****'
  };

  const user = {
    id: 1,
    name: 'amir'
  };


  it('should return initialState', () => {
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  it('should set loading when dispatching login action', () => {
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(authReducer(initialState, { type: LOGIN, credentials })).toEqual(expectedState);
  });

  it('should set userData and loadings when dispatching loginSuccess action', () => {
    const expectedState = {
      ...initialState,
      loading: false,
      loaded: true,
      data: user
    };
    expect(authReducer(initialState, { type: LOGIN_SUCCESS, data: user })).toEqual(expectedState);
  });

  it('should set error and loadings when dispatching loginFailure action', () => {
    const error = {
      message: 'bad credentials'
    };
    const expectedState = {
      ...initialState,
      loading: false,
      loaded: true,
      error
    };
    expect(authReducer(initialState, { type: LOGIN_FAILURE, error })).toEqual(expectedState);
  })
});


describe('watcher', () => {
  const credentials = {
    username: 'amir',
    password: '****'
  };
  const it = sagaHelper(watchLogin(fetch, { credentials }));

  it('should call api first', (result) => {
    expect(result.username).toEqual('amir');
  });

  it('should dispatch load success action', (result) => {
    expect(result.payload.action.type).toEqual(LOGIN_SUCCESS);
  });
});
