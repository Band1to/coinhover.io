import { ADD_COIN } from './actions'

const initialState = [];

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_COIN:
			return action.portfolio;
		default:
			return state;
	}
}