import React from 'react'
import PropTypes from 'prop-types'
import AssetThead from './AssetThead'
import AssetRow from '../assetRow/AssetRow'
import SearchCoin from './SearchCoin'

class AssetsTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			assets: props.assets,
			search: false
		};
	}

	render() {
		const assets = this.state.assets ? this.state.assets : [];

		const handleClick = (e) => {
		    e.preventDefault();
		    this.setState({ search: true });
		};

		return (
			<section className="asset-table">
				<AssetThead />
				{ assets.map(asset =>
					<AssetRow
						key={ asset.id }
						asset={ asset} 
						balance={ asset.balance }
						price_usd={ asset.price_usd }/>) }
				
				<div className="add-asset-row">
					{ this.state.search ? (
						<SearchCoin />
					) : (
						<div className="add-btn" onClick={ handleClick }>
							<div className="icon-plus-outline"></div> Add Asset
						</div>
					)}
				</div>
			</section>
		)
	}
}

export default AssetsTable

React.PropTypes.arrayOf(
	React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired
	})
).isRequired