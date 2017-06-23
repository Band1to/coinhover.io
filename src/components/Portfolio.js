import React from 'react'
import SocialMediaFooter from './SocialMediaFooter'
import AssetsTable from './AssetsTable'
import { assets } from '../models/temp'
import local_coins from '../coins.json'
import * as api from '../services/api'

let allCoins = [];

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
		api.getAllCoins().then((res) => {
			// set res.data to coins
			// find coin data in coins and match to item in local_coins
			// set state.assets to updated local_coins and pass into AssetTable
			// set loading to false
			allCoins = res.data;
			this.setState({ coins: res.data });
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
					<AssetsTable assets={ assets }/>
					<SocialMediaFooter />
				</section>
			</div>
		)
	}
}

export default Portfolio;