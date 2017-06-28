import React from 'react'
import { connect } from 'react-redux'
import SocialMediaFooter from '../common/SocialMediaFooter'
import AssetsTable from '../assetsTable/AssetsTable'
// import { assets } from '../../models/temp'
import local_coins from '../../coins.json'
import * as api from '../../services/api'
import { updateLocalCoins } from '../../services/coinFactory'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

let localCoins = local_coins;

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			assets: props.portfolio,
			total: 0
		};
		console.log('props', props);
	}

	componentDidMount() {
		// api.getAllCoins().then((res) => {
		// 	const portfolioCoins = updateLocalCoins(localCoins, res.data);
		// 	updatePortfolio(portfolioCoins);
		// 	this.setState({ assets: portfolioCoins, loading: false });
		// });

		// this.setState({ assets: local_coins, loading: false });
		// this.setState({ assets: [], loading: false });
		this.setState({ loading: false });
	}

	render() {
		const assets = this.state.assets;
		const total  = this.state.total;

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

export default connect(mapStateToProps, null)(Portfolio)