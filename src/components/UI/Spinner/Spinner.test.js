import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Spinner from './Spinner'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<Spinner />)

test('renders without error', () => {
	const wrapper = setup()
	const spinnerComponent = findByTestAttr(wrapper, 'component-spinner')
	expect(spinnerComponent).toHaveLength(1)
})
