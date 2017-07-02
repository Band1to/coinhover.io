import * as R from 'ramda'
import * as api from '../../services/api'
import { zeroBalance } from '../../utils/modifier'

export const ADD_COIN = 'ADD_COIN'
export const REMOVE_COIN = 'REMOVE_COIN'
export const UPDATE_VALUE = 'UPDATE_VALUE'

// actions /////////////////////////////////////////////////////////////////////
export function addCoin(coin) {
	return dispatch =>
		api.getCoin(coin)
			.then((res) => R.head(res.data))
			.then((remote_coin) => zeroBalance(remote_coin))
			.then((remote_coin) => dispatch(add(remote_coin)));
}

export function removeCoin(coin) {
	return dispatch => dispatch(remove(coin));
}

// action creators /////////////////////////////////////////////////////////////
export function add(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}

export function remove(coin) {
	return {
		type: REMOVE_COIN,
		coin
	}
}

export function updateValue(portfolio) {
	return {
		type: UPDATE_VALUE,
		portfolio
	}
}