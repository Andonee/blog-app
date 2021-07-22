import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Logo from './Logo'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<Logo />)

test('renders without error', () => {
	const wrapper = setup()
	const logoComponent = findByTestAttr(wrapper, 'component-logo')
	expect(logoComponent).toHaveLength(1)
})
