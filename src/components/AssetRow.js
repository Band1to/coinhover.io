import React from 'react'
import PropTypes from 'prop-types'
import { multiply, round } from '../utils/formatter'

const rounder = (balance, price_usd) => round(multiply(balance, price_usd))

class AssetRow extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			asset: props.asset,
			balance: props.balance,
			value: rounder(props.balance, props.price_usd)
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const balance = event.target.value;
		const price_usd = this.state.asset.price_usd;
		const value = rounder(balance, price_usd);
		this.setState({ balance, value });
	}

	render() {
		return (
			<ul className="flex-container">
				<li className="flex-item">
					<div className="asset-btn">
						<div className="coin-logo">
							<img src="/static/imgs/coins/bitcoin.png"/>
						</div>
						<strong>{this.state.asset.symbol}</strong>
						<small>{this.state.asset.name}</small>
					</div>
				</li>
				<li className="flex-item num">
					<input type="text"
						   value={ this.state.balance }
						   onChange={ this.handleChange } />
				</li>
				<li className="flex-item num">
					<div className="flex-border">
						${ this.state.value }
					</div>
				</li>
				<li className="flex-item positive num">
					<div className="flex-border">
						{ this.state.asset.percent_change_1h }
					</div>
				</li>
				<li className="flex-item num">
					<div className="flex-border">40%</div>
				</li>
			</ul>
		)
	}
}

export default AssetRow