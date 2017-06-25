import React from 'react'
import PropTypes from 'prop-types'
import AssetThead from './AssetThead'
import AssetRow from './AssetRow'
import { getCoins } from '../services/coinStorage'

class AssetsTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			assets: props.assets
		};
	}

	componentDidMount() {
		const storedCoins = getCoins();
		console.log(' storedCoins', storedCoins.length);
	}

	render() {
		const assets = this.state.assets ? this.state.assets : [];

		const handleClick = (e) => {
		    e.preventDefault();
		    console.log('The link was clicked.', this.state);
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
					<div className="add-btn" onClick={ handleClick }>
						<div className="icon-plus-outline"></div> Add Asset
					</div>
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