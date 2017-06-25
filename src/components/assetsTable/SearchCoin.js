import React from 'react'
import * as R from 'ramda';
import { getCoins } from '../../services/coinStorage'

const stored = { coins: [] };
const testMatch = (re, str) => str.search(re) != -1;

class SearchCoin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			coins: [],
			searched: []
		};
	}

	componentDidMount() {
		this.coinInput.focus(); 
		this.handleChange = this.handleChange.bind(this);
		stored.coins = getCoins();
		this.setState({ coins: stored.coins });
	}

	handleChange() {
		const text = document.getElementById('coin-search').value;

		if (text.length > 1) {
			const findMatches = (coin) => testMatch(text, coin.name.toLowerCase()) ? coin : null;
			const matches = R.map(findMatches, this.state.coins);
			const exactMatches = R.reject(R.isNil, matches);
			this.setState({ searched: exactMatches });
		}
		else {
			this.setState({ searched: [] });
		}
	}

	render() {
		const searched = this.state.searched.map((coin) => {
			return (
				<li key={ coin.id }>
					<div className="coin-logo">
						<img src={ coin.logo }/>
					</div>
					<span>{ coin.name }</span>
				</li>
			);
		});

		return (
			<div>
				<input type="text"
					   id="coin-search"
					   className="coin-search-input"
					   placeholder="Search"
					   onChange={ ()=> this.handleChange() }
					   ref={(input) => { this.coinInput = input; }} />
				<div className="coin-select">
					<ul>
						{ searched }
					</ul>
				</div>
			</div>
		)
	}
}

export default SearchCoin