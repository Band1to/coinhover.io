/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import { coinsList, findCoins } from '../../services/coinFactory';
import { addCoin } from '../../actions';

class SearchCoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: props.coins,
      searched: []
    };

    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ coins: coinsList });
    // this.coinInput.focus();
    // this.handleChange = this.handleChange.bind(this);
    this.clickCoin = this.clickCoin.bind(this);
  }

  handleChange() {
    const text = document.getElementById('coin-search').value;
    const search = (txt) => {
      console.log('findCoins(txt)', findCoins(txt));
      this.setState({ searched: findCoins(txt) });
    }
    const clearSearch = () => this.setState({ searched: [] });
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
    const coins = this.props.coins.map((coin) => {
      return (
        <li key={coin.id}>
          <button onClick={() => this.clickCoin(coin)}>
            <div className="coin-logo">
              <img alt={coin.id} src={coin.logo} />
            </div>
            <span>{ coin.name }</span>
          </button>
        </li>
      );
    });

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
        <div className="icon-cancel-outline fl" role="button" tabIndex={0} onClick={this.close} />
        <div className="coins-container">
          <div className="coin-select">
            <ul>
              { coins }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => { dispatch(addCoin(...args)); }
});

export default connect(null, mapDispatchToProps)(SearchCoin);
