import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import * as R from 'ramda'
import * as api from '../../services/api'
import { addToPortfolio, findCoins } from '../../services/coinFactory'
import { addCoin } from '../../reducer/portfolio/actions'

const mapDispatchToProps = (dispatch) => ({
	selectCoin(coin) {
		return () => {
			addCoin(coin)
			// dispatch(addCoin(coin))
		}
	}
});

class SearchCoin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searched: []
		};
		console.log('props', props);
		this.close = this.close.bind(this);
	}

	componentDidMount() {
		this.coinInput.focus(); 
		this.handleChange = this.handleChange.bind(this);
		this.clickCoin = this.clickCoin.bind(this);
	}

	handleChange() {
		const text = document.getElementById('coin-search').value;
		const search = (text)  => this.setState({ searched: findCoins(text) });
		const clearSearch = () => this.setState({ searched: [] });
		text.length > 1 ? search(text) : clearSearch();
	}

	clickCoin(coin) {
		// api.getCoin(coin.id).then((res) => {
		// 	const apiCoin = R.head(res.data);
		// 	addToPortfolio(apiCoin);
		// });
		this.props.selectCoin(coin);
		this.props.closeSearch();
	}

	close() {
		this.props.closeSearch();
	}

	render() {
		const searched = this.state.searched.map((coin) => {
			return (
				<li key={ coin.id } onClick={ ()=> this.clickCoin(coin) }>
					<div className="coin-logo">
						<img src={ coin.logo }/>
					</div>
					<span>{ coin.name }</span>
				</li>
			);
		});

		return (
			<div id="search-coin-component">
				<input type="text"
					   id="coin-search"
					   className="coin-search-input fl"
					   placeholder="Search"
					   onChange={ ()=> this.handleChange() }
					   ref={ (input) => { this.coinInput = input; } } />
				<div className="icon-cancel-outline fl" onClick={ this.close }></div>
				<div className="coin-select">
					<ul>
						{ searched }
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(SearchCoin)