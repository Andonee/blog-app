import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import FetchDataError from './FetchDataError'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<FetchDataError />)

test('renders without error', () => {
	const wrapper = setup()
	const fetchDataComponentComponent = findByTestAttr(
		wrapper,
		'component-fetchDataError'
	)
	expect(fetchDataComponentComponent).toHaveLength(1)
})
