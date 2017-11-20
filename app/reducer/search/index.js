/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
// import * as R from 'ramda';

import {
  // REMOVE_COIN_PORTFOLIO,
  UPDATE_COIN_VALUE,
  SET_COINS_SEARCH
} from '../../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COINS_SEARCH:
      console.log('search: SET_COINS_SEARCH');
      return [...state, action.searchedCoins];

    // case REMOVE_COIN_PORTFOLIO:
    //   console.log('search: REMOVE_COIN_PORTFOLIO');
    //   return R.filter(removeCoin, state);

    case UPDATE_COIN_VALUE:
      console.log('search: UPDATE_COIN_VALUE');
      const values = state.map(coin => coin.value);
      const total = values.reduce((x, y) => x + y);

      return state.map((coin) => {
        coin.percentage = (coin.value / (total * 100));
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
