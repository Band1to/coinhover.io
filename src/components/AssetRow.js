import React from 'react'
import PropTypes from 'prop-types'

const onChangeHandler = (type) => {
	console.log('type:', type);
};

export default function AssetRow ({ asset }) {
	// <div className="icon-bitcoin"></div> {asset.name} ({asset.symbol})
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
					{ asset.price_usd }
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