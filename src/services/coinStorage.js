import * as R from 'ramda'
import local_coins from '../coins.json'

const storage = {
	coins: local_coins,
	portfolio: []
};

const sortById = R.sortBy(R.compose(R.prop('id')));

export const updateLocalCoins = (localCoins, remoteCoins) => {
	const ids = new Set(localCoins.map((localCoin) => localCoin.id));
	const filteredRemote = remoteCoins.filter((remoteCoin) => ids.has(remoteCoin.id));

	const sortedLocal  = sortById(localCoins);
	const sortedRemote = sortById(filteredRemote);
	const zipped = R.zip(sortedLocal, sortedRemote);

	return zipped.map((z) => R.merge(z[0], z[1]));
};

export const storeCoins = (coins) => storage.coins = coins;
export const getCoins = () => storage.coins;

export const addToPortfolio = (coin) => storage.portfolio.push(coin);
export const getPortfolio = () => storage.portfolio;