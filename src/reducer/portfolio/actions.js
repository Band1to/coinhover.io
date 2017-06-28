import * as api from '../../services/api'
import { addToPortfolio } from '../../services/coinFactory'

export const ADD_COIN = 'ADD_COIN'

export function addCoin(coin) {
	return dispatch =>
		api.getCoin(coin)
			.then((res_coin)  => addToPortfolio(res_coin))
			.then((portfolio) => dispatch(updatePortfolio(portfolio)));
}

export function updatePortfolio(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}