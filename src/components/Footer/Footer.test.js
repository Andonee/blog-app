import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Footer from './Footer'
import { findByTestAttr } from '../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<Footer />)

test('renders footer without error', () => {
	const wrapper = setup()
	const footerComponent = findByTestAttr(wrapper, 'component-footer')
	expect(footerComponent).toHaveLength(1)
})

test('renders copyrights without error', () => {
	const wrapper = setup()
	const footerCopyrights = findByTestAttr(wrapper, 'footer-copyrights')
	expect(footerCopyrights).toHaveLength(1)
})

test('renders button without error', () => {
	const wrapper = setup()
	const footerButton = findByTestAttr(wrapper, 'footer-button')
	expect(footerButton).toHaveLength(1)
})
