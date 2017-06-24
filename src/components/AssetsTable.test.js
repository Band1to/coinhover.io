import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import AssetsTable from './AssetsTable'
import AssetRow from './AssetRow'
import AssetThead from './AssetThead'

const assetsTable = enzyme.shallow(<AssetsTable />);

describe('<AssetsTable /> component', () => {
	it('should render', () => {
		const tree = toJson(assetsTable);
		expect(tree).toMatchSnapshot();
	});

	it('contains the AssetThead component', () => {
		expect(assetsTable.find(AssetThead).length).toBe(1);
	});
});