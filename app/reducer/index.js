import { combineReducers } from 'redux';
import portfolio from './portfolio';
import search from './search';

export default combineReducers({
  portfolio,
  search
});
