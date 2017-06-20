import React from 'react'
import PropTypes from 'prop-types'
import AssetRow from './AssetRow'

class AssetsTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			assets: props.assets
		};
	}

	render() {
		const assets = this.state.assets ? this.state.assets : [];	

		return (
			<section className="asset-table">
				{ assets.map(asset => <AssetRow key={asset.id} asset={asset}/>) }
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

// AssetsTable.propTypes = {
// 	assets: PropTypes.array.isRequired
// }

React.PropTypes.arrayOf(
	React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired
	})
).isRequired