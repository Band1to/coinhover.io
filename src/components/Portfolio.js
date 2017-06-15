import React from 'react'
import PropTypes from 'prop-types'
import CoinModal from './CoinModal'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			coin_modal_open: false
		};
	}

	render() {
		let modalOpen = this.state.coin_modal_open;

		const addCoin = () => {
			console.log('addCoin...');
			console.log(' modalOpen', !modalOpen);
			this.setState({
        		coin_modal_open: !modalOpen
        	});
		};

		return (
			<div className="app-bg">
				{ modalOpen && <CoinModal/> }
				<section className="welcome">
					<header>					
						<h1>CoinHover</h1>
						<h2>Watch all your balances</h2>
					</header>
					<section className="coin-table" onClick={ addCoin }>
						<p>Add Coin</p>
						<div className="ico-add"></div>
						<div className="coin-input"></div>
					</section>
				</section>
			</div>
		)
	}
}

export default Portfolio;