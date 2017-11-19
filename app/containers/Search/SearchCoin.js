import React from 'react'
import { connect } from 'react-redux'
import { findCoins } from '../../services/coinFactory'
import { addCoin, setSearch } from '../../actions'

class SearchCoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: props.search[0],
      saved: props.search[0]
    };

    this.close = this.close.bind(this);
    this.clickCoin = this.clickCoin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.coinInput.focus();
  }

  handleChange() {
    const text = document.getElementById('coin-search').value;

    const search = (txt) => {
      const searchedCoins = findCoins(txt);
      this.props.setSearch(searchedCoins);
      this.setState({ coins: searchedCoins });
    };

    const clearSearch = () => {
      this.props.setSearch([]);
      this.setState({ coins: this.state.saved });
    };

    text.length > 1 ? search(text) : clearSearch();
  }

  clickCoin(coin) {
    this.props.addCoin(coin);
    this.props.closeSearch();
  }

  close() {
    this.props.closeSearch();
  }

  render() {
    const coins = this.state.coins.map(coin => (
      <li key={coin.id}>
        <button onClick={() => this.clickCoin(coin)}>
          <div className="coin-logo">
            <img alt={coin.id} src={coin.logo} />
          </div>
          <span>{ coin.name }</span>
        </button>
      </li>
    ));

    return (
      <div id="search-coin-component">
        <input
          type="text"
          id="coin-search"
          className="coin-search-input fl"
          placeholder="Search"
          onChange={() => this.handleChange()}
          ref={(input) => { this.coinInput = input; }}
        />
        <div className="cancel-search">
          <img src="static/imgs/x.svg"/>
        </div>
        <div className="coins-container">
          <div className="coin-select">
            <ul>
              { coins }
            </ul>
          </div>
        </div>
        <div className="overlay" role="button" tabIndex={0} onClick={this.close}></div>
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => { dispatch(addCoin(...args)); },
  setSearch: (...args) => { dispatch(setSearch(...args)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoin);
