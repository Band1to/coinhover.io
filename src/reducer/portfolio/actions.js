import * as R from 'ramda'
import * as api from '../../services/api'

export const ADD_COIN = 'ADD_COIN'

export function addCoin(coin) {
	return dispatch =>
		api.getCoin(coin)
			.then((res) => R.head(res.data))
			.then((remote_coin) => {
				console.log('remote_coin', remote_coin);
				return remote_coin;
			})
			.then((remote_coin) => dispatch(add(remote_coin)));
}

// action creator
export function add(portfolio) {
	return {
		type: ADD_COIN,
		portfolio
	}
}