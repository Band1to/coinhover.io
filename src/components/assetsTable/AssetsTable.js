import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AssetThead from './AssetThead'
import AssetRow from '../assetRow/AssetRow'
import SearchCoin from './SearchCoin'

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
		const assets = this.props.portfolio ? this.props.portfolio : [];
		console.log('AssetsTable assets', assets);

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
						<SearchCoin closeSearch={ this.closeSearch } />
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