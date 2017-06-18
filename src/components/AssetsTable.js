import React from 'react'

class AssetsTable extends React.Component {
	render() {
		return (
			<section className="asset-table">

				<ul className="flex-container">
					<li className="flex-item">
						<div className="asset-btn">
							<div className="icon-bitcoin"></div> Bitcoin (BTC)
						</div>
					</li>
					<li className="flex-item">$2700</li>
					<li className="flex-item positive"><em>+</em>0.1</li>
					<li className="flex-item">40%</li>
				</ul>	

				<div className="add-asset-row">
					<div className="add-btn">
						<div className="icon-plus-outline"></div> Add Asset
					</div>
				</div>
			</section>
		)
	}
}

export default AssetsTable