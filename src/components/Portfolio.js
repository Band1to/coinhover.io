import React from 'react'
import * as R from 'ramda';
import SocialMediaFooter from './SocialMediaFooter'
import AssetsTable from './AssetsTable'
import { assets } from '../models/temp'
import local_coins from '../coins.json'
import * as api from '../services/api'

let localCoins = local_coins;
let allCoins = [];

const matchCoins = R.curry((api_coin, local_coin) => {
	if (api_coin.id === local_coin.id) {
		local_coin.price_usd = api_coin.price_usd;
		local_coin.percent_change_1h = api_coin.percent_change_1h;
		local_coin.percent_change_24h = api_coin.percent_change_24h;
		local_coin.percent_change_7d = api_coin.percent_change_7d;
		return local_coin;
	}
});

const mapLocal = (api_coin) => {
	const matchCoin = matchCoins(api_coin);
	R.forEach(matchCoin, localCoins);

	// for (var i=0; i<localCoins.length; i++) {
	// 	let local_coin = localCoins[i];
	// 	if (local_coin.id === all_coin.id) {
	// 		local_coin.price_usd = all_coin.price_usd;
	// 		local_coin.percent_change_1h = all_coin.percent_change_1h;
	// 		local_coin.percent_change_24h = all_coin.percent_change_24h;
	// 		local_coin.percent_change_7d = all_coin.percent_change_7d;
	// 		return local_coin;
	// 	}
	// }
};

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			coins: [],
			assets: []
		};
	}

	componentDidMount() {
		// console.log('local_coins', local_coins);
		api.getAllCoins().then((res) => {
			// set res.data to coins
			// find coin data in coins and match to item in local_coins
			// set state.assets to updated local_coins and pass into AssetTable
			// set loading to false
			allCoins = res.data;

			R.forEach(mapLocal, allCoins);
			console.log('localCoins', localCoins);

			this.setState({ coins: res.data, loading: false });
			// console.log('this', this.state);
		});

		// api.getCoin('bitcoin').then((res) => {
		// 	console.log('Got bitcoin? ', res.data[0]);
		// });
	}

	render() {
		return (
			<div className="app-bg">
				<section className="portfolio">
					<header>
						<h1><span className="plus">+</span>COINHOVER</h1>
						<h2>Watch your cryptocurrency asset balances in once place.</h2>
						<em className="num">$5000</em>
					</header>
					{ this.state.loading ? (
						<div className="loading">
							<div className="loader"></div>
							<span>Loading coin data...</span>
						</div>
					) : (
						<AssetsTable assets={ assets }/>
					)}
					<SocialMediaFooter />
				</section>
			</div>
		)
	}
}

export default Portfolio;