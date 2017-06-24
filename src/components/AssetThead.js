import React from 'react'

export default function AssetThead() {
	return (
		<ul className="flex-container">
			<li className="flex-item">
				<small className="">Name</small>
			</li>
			<li className="flex-item">
				<small className="">Balance</small>
			</li>
			<li className="flex-item">
				<small className="">Value</small>
			</li>
			<li className="flex-item">
				<small className="">1HR change</small>
			</li>
			<li className="flex-item">
				<small className="">% of portfolio</small>
			</li>
		</ul>
	)
}