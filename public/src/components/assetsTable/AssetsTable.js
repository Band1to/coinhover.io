import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AssetThead from './AssetThead'
import AssetRow from '../assetRow/AssetRow'
import SearchCoin from './SearchCoin'
import local_coins from '../../coins.json'
// import { coinsList } from '../../services/coinFactory'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

export class AssetsTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: false
		};
		this.closeSearch = this.closeSearch.bind(this);
	}

	closeSearch() {
		this.setState({ search: false });
	}

	render() {
		const coins = local_coins;
		console.log('AssetsTable coins', coins)
		const assets = this.props.portfolio ? this.props.portfolio : [];

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
						price_usd={ asset.price_usd }
						percentage={ asset.percentage } />) }

				<div className="add-asset-row">
					{ this.state.search ? (
						<SearchCoin coins={ coins } closeSearch={ this.closeSearch } />
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

const AssetsTableContainer = AssetsTable;
export default connect(mapStateToProps, null)(AssetsTableContainer)

AssetsTable.propTypes = {
  arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
  }))
}
