import * as R from 'ramda'
import local_coins from '../coins.json'

export const storage = {
	coins: local_coins,
	portfolio: []
};

const sortById = R.sortBy(R.compose(R.prop('id')));

const testMatch = (re, str) => str.search(re) != -1;

export const updateLocalCoins = (localCoins, remoteCoins) => {
	const ids = new Set(localCoins.map((localCoin) => localCoin.id));
	const filteredRemote = remoteCoins.filter((remoteCoin) => ids.has(remoteCoin.id));
	const sortedLocal  = sortById(localCoins);
	const sortedRemote = sortById(filteredRemote);
	const zipped = R.zip(sortedLocal, sortedRemote);
	return zipped.map((z) => R.merge(z[0], z[1]));
};

export const coinsList = () => {
	// storage.coins
	console.log('coinsList', local_coins)
	return local_coins;
};

export const findCoins = (text) => {
	const findMatches = (coin) => testMatch(text, coin.name.toLowerCase()) ? coin : null;
	const matches = R.map(findMatches, storage.coins);
	return R.reject(R.isNil, matches);
};

export const getLocalCoins = () => storage.coins;

// export const updatePortfolio = (coins) => storage.portfolio = coins; // Use with localStorage
export const getPortfolio = () => storage.portfolio;

export const addToPortfolio = (coin) => {
	storage.portfolio.push(coin);
	return getPortfolio();
};
