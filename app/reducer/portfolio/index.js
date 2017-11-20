/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import {
  ADD_COIN_PORTFOLIO,
  UPDATE_COIN_BALANCE,
  REMOVE_COIN_PORTFOLIO
} from '../../actionTypes';

const initialState = [];

const removeCoin = (coin, state) => {
  const filtered = state.filter(item => item.name !== coin);
  return filtered;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN_PORTFOLIO:
      return [...state, action.portfolio];

    case REMOVE_COIN_PORTFOLIO:
      return removeCoin(action.coin, state);

    case UPDATE_COIN_BALANCE:
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
