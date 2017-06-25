import React from 'react'
import { getCoins } from '../../services/coinStorage'

const stored = { coins: [] };

class SearchCoin extends React.Component {
	componentDidMount() {
		this.coinInput.focus(); 
		this.handleChange = this.handleChange.bind(this);
		stored.coins = getCoins();
	}

	handleChange() {
		const text = document.getElementById('coin-search').value;
		if (text.length > 1) {
			console.log('text', text);
			console.log(' stored.coins', stored.coins);
			// Start search
		}
	}

	render() {
		return (
			<div>
				<input type="text"
					   id="coin-search"
					   className="coin-search-input"
					   placeholder="Search"
					   onChange={ ()=> this.handleChange() }
					   ref={(input) => { this.coinInput = input; }} />
			</div>
		)
	}
}

export default SearchCoin