/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import {
  SET_COINS_SEARCH
} from '../../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COINS_SEARCH:
      return [...state, action.searchedCoins];

    default:
      return state;
  }
};
