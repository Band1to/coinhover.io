import * as R from 'ramda';
import * as api from '../../services/api';

import * as actionTypes from '../../actionTypes';

// actions /////////////////////////////////////////////////////////////////////
export function setSearch(coins) {
  return dispatch => dispatch(set(coins));
}

// action creators /////////////////////////////////////////////////////////////
export function set(searchedCoins) {
  return {
    type: actionTypes.SET_COINS_SEARCH,
    searchedCoins
  };
}
