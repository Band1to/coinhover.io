import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import { AssetRow } from './AssetRow'

const bitcoin = {
	"id": "bitcoin", 
	"name": "Bitcoin",
	"balance": "1.1",
	"symbol": "BTC", 
	"rank": "1", 
	"price_usd": "573.137", 
	"price_btc": "1.0", 
	"24h_volume_usd": "72855700.0", 
	"market_cap_usd": "9080883500.0", 
	"available_supply": "15844176.0", 
	"total_supply": "15844176.0", 
	"percent_change_1h": "0.04", 
	"percent_change_24h": "-0.3", 
	"percent_change_7d": "-0.57", 
	"last_updated": "1472762067"
};

const assetRow = enzyme.shallow(
	<AssetRow
		key={ bitcoin.id }
		asset={ bitcoin} 
		balance={ bitcoin.balance }
		price_usd={ bitcoin.price_usd } />);

describe('<AssetRow /> component', () => {
	it('should render', () => {
		const tree = toJson(AssetRow);
		expect(tree).toMatchSnapshot();
	});

	it('renders BTC in the symbol area', () => {
		expect(assetRow.find('strong').text()).toBe('BTC');
	});

	it('renders Bitcoin in the name area', () => {
		expect(assetRow.find('small').text()).toBe('Bitcoin');
	});
});