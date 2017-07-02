import { ADD_COIN, REMOVE_COIN, UPDATE_COIN } from './actions'
import * as R from 'ramda'

const initialState = [];

const removeCoin = (coin, state) => {
	// R.find(R.not())(state);
	for (var i=0; i<state.length; i++) {
		if (state[i].id !== coin.id) {
			return coin;
		}
	}
};

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_COIN:
			console.log('[...state, action.portfolio]', [...state, action.portfolio]);
			return [...state, action.portfolio];
		case REMOVE_COIN:
			console.log('R.filter(removeCoin, state)', R.filter(removeCoin, state));
			return R.filter(removeCoin, state);
		default:
			return state;
	}
}