import React from 'react'

class AssetSideBar extends React.Component {
	render() {
		return (
			<section className="asset-sidebar">
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

export default AssetSideBar