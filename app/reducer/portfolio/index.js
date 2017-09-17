// import { ADD_COIN, REMOVE_COIN, UPDATE_VALUE } from './actions'
import * as actionTypes from '../../actionTypes';
import * as R from 'ramda';

const initialState = [];

const removeCoin = (coin, state) => {
  // R.find(R.not())(state);
  for (let i = 0; i < state.length; i++) {
    if (state[i].id !== coin.id) {
      return coin;
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COIN_PORTFOLIO:
      // console.log('[...state, action.portfolio]', [...state, action.portfolio]);
      return [...state, action.portfolio];

    case actionTypes.REMOVE_COIN_PORTFOLIO:
      // console.log('REMOVE_COIN');
      // console.log('R.filter(removeCoin, state)', R.filter(removeCoin, state));
      return R.filter(removeCoin, state);

    case actionTypes.UPDATE_COIN_VALUE:
      const values = state.map(coin => coin.value);
      const total = values.reduce((x, y) => x + y);

      return state.map((coin) => {
        coin.percentage = (coin.value / total * 100);
        if (coin.id === action.coin.id) {
          coin.value = action.coin.value;
          return coin;
        }
        return coin;
      });

    default:
      return state;
  }
};
