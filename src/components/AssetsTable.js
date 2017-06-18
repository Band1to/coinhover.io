import React from 'react'

class AssetsTable extends React.Component {
	render() {
		return (
			<section className="asset-table">
				<ul>
					<li>
						<div className="asset">
							<div className="icon-bitcoin"></div> Bitcoin
						</div>
					</li>
					<li>
						<div className="asset add">
							<div className="icon-plus-outline"></div> Add Asset
						</div>
					</li>
				</ul>
			</section>
		)
	}
}

export default AssetsTable