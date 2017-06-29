import { ADD_COIN } from './actions'

const initialState = [];

export default (state = initialState, action) => {
	console.log('action', action);
	switch(action.type) {
		case ADD_COIN:
			// return state.concat(action.portfolio)
			return [...state, action.portfolio];
			// return initialState.push(action.portfolio);
		default:
			return state;
	}
}