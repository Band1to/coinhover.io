// import { ADD_COIN, REMOVE_COIN, UPDATE_VALUE } from './actions'
import * as actionTypes from '../../actionTypes';
import * as R from 'ramda';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COINS_SEARCH:
      return [...state, action.searchedCoins];

    case actionTypes.REMOVE_COIN_PORTFOLIO:
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
