import React from 'react'

export default function AssetThead() {
	return (
		<ul className="flex-container">
			<li className="flex-item">
				<small>Name</small>
			</li>
			<li className="flex-item">
				<small>Balance</small>
			</li>
			<li className="flex-item">
				<small>Value</small>
			</li>
			<li className="flex-item">
				<small>24HR change</small>
			</li>
			<li className="flex-item">
				<small>% of portfolio</small>
			</li>
		</ul>
	)
}