import React from 'react'
import PropTypes from 'prop-types'
import { multiply, round } from '../utils/formatter'

const onChangeHandler = (type) => {
	console.log('type:', type);
};

export default function AssetRow ({ asset }) {

	const value = round(multiply(asset.balance, asset.price_usd));
	
	return (
		<ul className="flex-container">
			<li className="flex-item">
				<div className="asset-btn">
					<div className="coin-logo">
						<img src="/static/imgs/coins/bitcoin.png"/>
					</div>
					<strong>{asset.symbol}</strong>
					<small>{asset.name}</small>
				</div>
			</li>
			<li className="flex-item num">
				<input type="text"
					   placeholder={ asset.balance }
					   onChange={() => onChangeHandler('change') }
					   onBlur={() => onChangeHandler('blur')} />
			</li>
			<li className="flex-item num">
				<div className="flex-border">
					${ value }
				</div>
			</li>
			<li className="flex-item positive num">
				<div className="flex-border">
					{ asset.percent_change_1h }
				</div>
			</li>
			<li className="flex-item num">
				<div className="flex-border">40%</div>
			</li>
		</ul>
	)
}