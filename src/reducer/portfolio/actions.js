import * as R from 'ramda'
import * as api from '../../services/api'
import { zeroBalance } from '../../utils/modifier'
import { ADD_COIN, REMOVE_COIN, UPDATE_VALUE } from './consts'

export function addCoin(coin) {
	return dispatch =>
		api.getCoin(coin)
			.then((res) => R.head(res.data))
			.then((remote_coin) => zeroBalance(remote_coin))
			.then((remote_coin) => dispatch(add(remote_coin)));
}

// action creators
export function add(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}

export function remove(portfolio) {
	return {
		type: REMOVE_COIN,
		portfolio
	}
}

export function updateValue(portfolio) {
	return {
		type: UPDATE_VALUE,
		portfolio
	}
}