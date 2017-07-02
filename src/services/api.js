import axios from 'axios'

const coinmarket = 'https://api.coinmarketcap.com/v1/ticker/';
const coin_ticker = (coin_id) => `https://api.coinmarketcap.com/v1/ticker/${coin_id}/`;
const log = (method, err) => {
	console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
	return err;
};

export const getAllCoins = () => {
	return axios.get(coinmarket)
    	.then(res => res)
    	.catch(err => log('api.userLogin', err));
};

export const getCoin = (coin) => {
	return axios.get(coin_ticker(coin))
		.then(res => res)
    	.catch(err => log('api.userLogin', err));
}