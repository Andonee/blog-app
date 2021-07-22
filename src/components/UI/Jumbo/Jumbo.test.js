import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Jumbo from './Jumbo'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<Jumbo />)

test('renders jumbo without error', () => {
	const wrapper = setup()
	const jumboComponent = findByTestAttr(wrapper, 'component-jumbo')
	expect(jumboComponent).toHaveLength(1)
})

test('renders image without error', () => {
	const wrapper = setup()
	const jumboImage = findByTestAttr(wrapper, 'jumbo-image')
	expect(jumboImage).toHaveLength(1)
})

test('renders text without error', () => {
	const wrapper = setup()
	const jumboText = findByTestAttr(wrapper, 'jumbo-text')
	expect(jumboText).toHaveLength(1)
})

test('renders header without error', () => {
	const wrapper = setup()
	const jumboHeader = findByTestAttr(wrapper, 'jumbo-header')
	expect(jumboHeader).toHaveLength(1)
})
