import * as R from 'ramda';
import * as api from '../../services/api';
import { linkLogo, formatPriceUSD, zeroBalanceValue } from '../../utils/modifier';

import {
  ADD_COIN_PORTFOLIO,
  UPDATE_COIN_BALANCE,
  REMOVE_COIN_PORTFOLIO
} from '../../actionTypes';

// action creators /////////////////////////////////////////////////////////////
export function add(portfolio) {
  return {
    type: ADD_COIN_PORTFOLIO,
    portfolio
  };
}

export function remove(coin) {
  return {
    type: REMOVE_COIN_PORTFOLIO,
    coin
  };
}

export function update(coin) {
  return {
    type: UPDATE_COIN_BALANCE,
    coin
  };
}

// actions /////////////////////////////////////////////////////////////////////
export function addCoin(coin) {
  return dispatch =>
    api.getCoin(coin.id)
      .then(res => R.head(res.data))
      .then(remoteCoin => linkLogo(coin, remoteCoin))
      .then(remoteCoin => zeroBalanceValue(remoteCoin))
      .then(remoteCoin => formatPriceUSD(remoteCoin))
      .then(remoteCoin => dispatch(add(remoteCoin)));
}

export function removeCoin(coin) {
  return dispatch => dispatch(remove(coin));
}

export function updateCoin(coin) {
  return dispatch => dispatch(update(coin));
}
