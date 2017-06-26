import React from 'react'
import * as R from 'ramda'
import SocialMediaFooter from '../common/SocialMediaFooter'
import AssetsTable from '../assetsTable/AssetsTable'
import { assets } from '../../models/temp'
import local_coins from '../../coins.json'
import * as api from '../../services/api'
import { matchCoins, storeCoins } from '../../services/coinStorage'

let localCoins = local_coins;
let allCoins = [];

const mapLocal = (api_coin) => {
	const matchCoin = matchCoins(api_coin);
	R.forEach(matchCoin, localCoins);
};

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			assets: [],
			total: 0
		};
	}

	componentDidMount() {
		// api.getAllCoins().then((res) => {
			// 1) Set res.data to coins
			// 2) Find coin data in coins and match to item in local_coins
			// 3) Set state.assets to updated local_coins and pass into AssetTable
			// 4) Set loading to false
			// allCoins = res.data;

			// R.forEach(mapLocal, allCoins);
			// storeCoins(localCoins);
			// this.setState({ assets: localCoins, loading: false });
		// });

		this.setState({ assets: [], loading: false });
	}

	render() {
		const assets = this.state.assets;
		const total = this.state.total;

		return (
			<div className="app-bg">
				<section className="portfolio">
					<header>
						<h1><span className="plus">+</span>COINHOVER</h1>
						<h2>Watch your cryptocurrency asset balances in once place.</h2>
						<em className="num">${ total }</em>
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

export default Portfolio