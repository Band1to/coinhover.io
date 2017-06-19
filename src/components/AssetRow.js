import React from 'react'
import PropTypes from 'prop-types'
export default function AssetRow ({ asset }) {
	return (
		<ul className="flex-container">
			<li className="flex-item">
				<div className="asset-btn">
					<div className="icon-bitcoin"></div> {asset.name} ({asset.symbol})
				</div>
			</li>
			<li className="flex-item">
				<input type="text" placeholder="Holdings"/>
			</li>
			<li className="flex-item">{ asset.price_usd }</li>
			<li className="flex-item positive">{ asset.percent_change_1h }</li>
			<li className="flex-item">40%</li>
		</ul>
	)
}