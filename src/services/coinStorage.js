import * as R from 'ramda';

const storage = {
	coins: []
};

export const matchCoins = R.curry((api_coin, local_coin) => {
	if (api_coin.id === local_coin.id) {
		local_coin.price_usd = api_coin.price_usd;
		local_coin.percent_change_1h = api_coin.percent_change_1h;
		local_coin.percent_change_24h = api_coin.percent_change_24h;
		local_coin.percent_change_7d = api_coin.percent_change_7d;
		if (R.isNil(local_coin.balance)) local_coin.balance = '0';
		return local_coin;
	}
});

export const storeCoins = (coins) => storage.coins = coins;
export const getCoins = () => storage.coins;