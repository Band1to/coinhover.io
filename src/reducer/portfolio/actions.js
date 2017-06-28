import * as R from 'ramda'
import * as api from '../../services/api'
import { addToPortfolio } from '../../services/coinFactory'

export const ADD_COIN = 'ADD_COIN'

export function addCoin(coin) {
	return dispatch =>
		api.getCoin(coin)
			.then((res) => addToPortfolio(R.head(res.data)))
			.then((portfolio) => dispatch(add(portfolio)));
}

// action creator
export function add(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}