import React from 'react';
import Header from '../common/Header'
import AssetsTable from '../assetsTable/AssetsTable'
import SocialMediaFooter from '../common/SocialMediaFooter'
import * as api from '../../services/api'
// import local_coins from '../../coins.json'
// import { updateLocalCoins } from '../../services/coinFactory'
// let localCoins = local_coins;

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
		};
	}

	componentDidMount() {
		// console.log('Portfolio state', this.state);
		// api.getAllCoins().then((res) => {
		// 	const portfolioCoins = updateLocalCoins(localCoins, res.data);
		// 	updatePortfolio(portfolioCoins);
		// 	this.setState({ assets: portfolioCoins, loading: false });
		// });
		this.setState({ loading: false });
	}

	render() {
		return (
			<div className="app-bg">
				<section className="portfolio">
					<Header />
					{ this.state.loading ? (
						<div className="loading">
							<div className="loader"></div>
							<span>Loading coin data...</span>
						</div>
					) : (
						<AssetsTable />
					)}
					<SocialMediaFooter />
				</section>
			</div>
		)
	}
}
