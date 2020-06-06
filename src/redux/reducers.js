import { combineReducers } from 'redux';


import auth from './Modules/auth';
import search from './Modules/search';
import commits from './Modules/commits';

export default combineReducers({
  auth,
  search,
  commits
});
