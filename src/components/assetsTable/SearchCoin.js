import React from 'react'

class SearchCoin extends React.Component {
	componentDidMount() {
		this.coinInput.focus(); 
	}

	render() {
		return (
			<div>
				<input type="text" className="coin-search-input" ref={(input) => { this.coinInput = input; }}  placeholder="Search"/>
			</div>
		)
	}
}

export default SearchCoin