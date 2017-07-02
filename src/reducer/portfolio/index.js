import { ADD_COIN } from './actions'

const initialState = [];

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_COIN:
			console.log('[...state, action.portfolio]', [...state, action.portfolio]);
			return [...state, action.portfolio];
		default:
			return state;
	}
}