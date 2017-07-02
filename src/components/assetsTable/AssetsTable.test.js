import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import { AssetsTable } from './AssetsTable'
import AssetThead from './AssetThead'
import AssetRow from '../assetRow/AssetRow'
import SearchCoin from './SearchCoin'

const assetsTable = enzyme.shallow(<AssetsTable />);

describe('<AssetsTable /> component', () => {
	it('should render', () => {
		const tree = toJson(assetsTable);
		expect(tree).toMatchSnapshot();
	});

	it('contains the AssetThead component', () => {
		expect(assetsTable.find(AssetThead).length).toBe(1);
	});

	it('Clicking the Add Asset button should enable the searchCoin component', () => {
		assetsTable.setState({ search: true });
		expect(assetsTable.find(SearchCoin).length).toBe(1);
	});
});