/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import * as R from 'ramda';

import {
  ADD_COIN_PORTFOLIO,
  UPDATE_COIN_BALANCE,
  REMOVE_COIN_PORTFOLIO
} from '../../actionTypes';

const initialState = [];

const removeCoin = (coin, state) => R.find(R.not())(state);
//   for (let i = 0; i < state.length; i++) {
//     if (state[i].id !== coin.id) {
//       return coin;
//     }
//   }
//   return state;
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN_PORTFOLIO:
      console.log('ADD_COIN_PORTFOLIO');
      return [...state, action.portfolio];

    case REMOVE_COIN_PORTFOLIO:
      console.log('REMOVE_COIN_PORTFOLIO');
      return R.filter(removeCoin, state);

    case UPDATE_COIN_BALANCE:
      console.log('UPDATE_COIN_BALANCE');
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
