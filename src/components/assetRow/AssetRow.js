import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCoin } from '../../reducer/portfolio/actions'
import { cleanNonNumeric, truncate } from '../../utils/formatter'
import { floorCents, formatPercentage, multiply, rounder } from '../../utils/math'
import { percentClasser } from '../../utils/styler'

const mapDispatchToProps = (dispatch) => ({
	dispatchUpdateCoin(coin) {
		dispatch(updateCoin(coin))
	}
});

export class AssetRow extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			asset: props.asset,
			balance: props.balance,
			value: rounder(props.balance, props.price_usd),
			percentage: props.percentage
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const balance = cleanNonNumeric(event.target.value);
		const price_usd = this.state.asset.price_usd;
		const value = rounder(balance, price_usd);
		const coin = this.state.asset;
		coin.value = value;
		this.props.dispatchUpdateCoin(coin);
		this.setState({ balance, value });
	}

	render() {
		const symbol = this.state.asset.symbol;
		const name = this.state.asset.name;
		const price = this.state.asset.price_usd;
		const price_usd = `USD price ${this.state.asset.price_usd}`;
		const percent_change_24h = this.state.asset.percent_change_24h;
		const percentage = formatPercentage(this.state.asset.percentage);
		const logo = this.state.asset.logo;
		console.log('this.state.asset', this.state.asset);

		return (
			<ul className="flex-container">
				<li className="flex-item flex-button">
					<div className="asset-btn">
						<div className="coin-logo">
							<img src={ logo }/>
						</div>
						<div className="asset-name">
							<strong>{ symbol }</strong>
							<small>{ truncate(name, 23) }</small>
						</div>
					</div>
				</li>
				<li className="flex-item num">
					<input type="text"
						   className="white"
						   value={ this.state.balance }
						   onChange={ this.handleChange } />
				</li>
				<li className="flex-item num">
					<div className="flex-border" title={ price_usd }>
						${ price }
					</div>
				</li>
				<li className="flex-item num">
					<div className="flex-border" title={ this.state.value }>
						${ this.state.value }
					</div>
				</li>
				<li className={ percentClasser(percent_change_24h) }>
					<div className="flex-border">
						{ this.state.asset.percent_change_24h }%
					</div>
				</li>
				<li className="flex-item num">
					<div className="flex-border">{ percentage }%</div>
				</li>
			</ul>
		)
	}
}

const AssetRowContainer = AssetRow;
export default connect(null, mapDispatchToProps)(AssetRowContainer)

AssetRow.propTypes = {
	asset: PropTypes.object.isRequired,
	price_usd: PropTypes.string.isRequired
};