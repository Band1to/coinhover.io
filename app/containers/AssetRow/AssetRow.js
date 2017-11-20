import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utils
import { percentClasser } from '../../utils/styler';
import { cleanNonNumeric, truncate } from '../../utils/formatter';
import {
  formatPercentage,
  numberWithCommas,
  rounder
} from '../../utils/math';

// Actions
import { removeCoin, updateCoin } from '../../actions';

export class AssetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: props.asset,
      balance: props.balance,
      value: rounder(props.balance, props.price_usd),
      percentage: props.percentage
    };

    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
  }

  handleChange(event) {
    const balance = cleanNonNumeric(event.target.value);
    const priceUsd = this.state.asset.price_usd;
    const value = rounder(balance, priceUsd);
    const coin = this.state.asset;
    coin.value = value;
    this.props.updateCoin(coin);
    this.setState({ balance, value });
  }

  remove(coin) {
    this.props.removeCoin(coin);
  }

  render() {
    const { symbol, name, logo, price, percentChange24h } = this.state.asset;
    const priceUsd = `USD price ${this.state.asset.price_usd}`;
    const percentage = formatPercentage(this.state.asset.percentage);

    return (
      <ul className="flex-container">
        <li className="flex-item flex-button">
          <div className="asset-btn">
            <div className="coin-logo">
              <img src={logo} alt={logo} />
            </div>
            <div className="asset-name">
              <strong>{ symbol }</strong>
              <small>{ truncate(name, 23) }</small>
            </div>
          </div>
        </li>
        <li className="flex-item num">
          <input
            type="text"
            className="white"
            value={this.state.balance}
            onChange={this.handleChange}
          />
        </li>
        <li className="flex-item num">
          <div className="flex-border" title={priceUsd}>
            ${price}
          </div>
        </li>
        <li className="flex-item num">
          <div className="flex-border" title={this.state.value}>
            ${numberWithCommas(this.state.value)}
          </div>
        </li>
        <li className={percentClasser(percentChange24h)}>
          <div className="flex-border">
            { this.state.asset.percentChange24h }%
          </div>
        </li>
        <li className="flex-item num">
          <div className="flex-border">{ percentage }%</div>
        </li>
        <li>
          <div
            className="close-x-smll"
            role="button"
            tabIndex={0}
            onClick={() => this.remove(name)}
          />
        </li>
      </ul>
    );
  }
}

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => ({
  // dispatchUpdateCoin(coin) {
  //   dispatch(updateCoin(coin));
  // },
  updateCoin: (...args) => { dispatch(updateCoin(...args)); },
  removeCoin: (...args) => { dispatch(removeCoin(...args)); }
});

const AssetRowContainer = AssetRow;
export default connect(mapStateToProps, mapDispatchToProps)(AssetRowContainer);

AssetRow.propTypes = {
  price_usd: PropTypes.string.isRequired,
  value: PropTypes.string
};
