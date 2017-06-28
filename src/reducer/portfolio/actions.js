import * as R from 'ramda'
import * as api from '../../services/api'
import { addToPortfolio } from '../../services/coinFactory'

export const ADD_COIN = 'ADD_COIN'

export function addCoin(coin) {
	console.log('addCoin', coin);
	return dispatch =>
		api.getCoin(coin)
			.then((res_coin)  => addToPortfolio(R.head(res_coin)))
			.then((portfolio) => dispatch(add(portfolio)));
}

export function add(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}