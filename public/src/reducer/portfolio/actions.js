// import * as R from 'ramda'
// import * as api from '../../services/api'
// import { linkLogo, formatPriceUSD, zeroBalanceValue } from '../../utils/modifier'
//
// export const ADD_COIN = 'ADD_COIN'
// export const REMOVE_COIN = 'REMOVE_COIN'
// export const UPDATE_VALUE = 'UPDATE_VALUE'
//
// // actions /////////////////////////////////////////////////////////////////////
// export function addCoin(coin) {
// 	return dispatch =>
// 		api.getCoin(coin.id)
// 			.then((res) => R.head(res.data))
// 			.then((remote_coin) => linkLogo(coin, remote_coin))
// 			.then((remote_coin) => zeroBalanceValue(remote_coin))
// 			.then((remote_coin) => formatPriceUSD(remote_coin))
// 			.then((remote_coin) => dispatch(add(remote_coin)));
// }
//
// export function removeCoin(coin) {
// 	return dispatch => dispatch(remove(coin));
// }
//
// export function updateCoin(coin) {
// 	return dispatch => dispatch(update(coin));
// }
//
// // action creators /////////////////////////////////////////////////////////////
// export function add(portfolio) {
// 	return {
// 		type: ADD_COIN,
// 		portfolio
// 	}
// }
//
// export function remove(coin) {
// 	return {
// 		type: REMOVE_COIN,
// 		coin
// 	}
// }
//
// export function update(coin) {
// 	return {
// 		type: UPDATE_VALUE,
// 		coin
// 	}
// }
