import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import AssetsTable from './AssetsTable'
import AssetRow from './AssetRow'

const assetsTable = enzyme.shallow(<AssetsTable />);

describe('<AssetsTable /> component', () => {
	it('should render', () => {
		const tree = toJson(assetsTable);
		expect(tree).toMatchSnapshot();
	});

	// it('contains the AssetsTable component', () => {
	// 	expect(assetsTable.find(AssetRow).length).toBe(1);
	// });
});