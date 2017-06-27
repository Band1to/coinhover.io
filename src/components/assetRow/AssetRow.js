import React from 'react'
import PropTypes from 'prop-types'
import { cleanNonNumeric, floorCents, multiply, rounder, truncate } from '../../utils/formatter'

const percentageClasser = (number) => {
	let classString = 'flex-item num';
	if (number == 0) return classString;
    classString = number >= 0 ? `${classString} positive` : `${classString} negative`;
    return classString;
};

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
		const balance = cleanNonNumeric(event.target.value);
		const price_usd = this.state.asset.price_usd;
		const value = rounder(balance, price_usd);
		this.setState({ balance, value });
	}

	render() {
		const symbol = this.state.asset.symbol;
		const name = this.state.asset.name;
		const price_usd = `USD price ${this.state.asset.price_usd}`;
		const percent_change_1h = this.state.asset.percent_change_1h;
		const logo = this.state.asset.logo;

		return (
			<ul className="flex-container">
				<li className="flex-item flex-button">
					<div className="asset-btn">
						<div className="coin-logo">
							<img src={ logo }/>
						</div>
						<strong>{ symbol }</strong>
						<small>{ truncate(name, 23) }</small>
					</div>
				</li>
				<li className="flex-item num">
					<input type="text"
						   value={ this.state.balance }
						   onChange={ this.handleChange } />
				</li>
				<li className="flex-item num">
					<div className="flex-border" title={ price_usd }>
						${ this.state.value }
					</div>
				</li>
				<li className={ percentageClasser(percent_change_1h) }>
					<div className="flex-border">
						{ this.state.asset.percent_change_1h }%
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

AssetRow.propTypes = {
	asset: PropTypes.object.isRequired,
	price_usd: PropTypes.string.isRequired
};