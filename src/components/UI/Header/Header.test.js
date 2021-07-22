import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Header from './Header'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () =>
	shallow(
		<Header
			content='some content'
			size='some value'
			color='some color'
			align='some align'
		/>
	)

test('renders without error', () => {
	const wrapper = setup()
	const headerComponent = findByTestAttr(wrapper, 'component-header')
	expect(headerComponent).toHaveLength(1)
})

test('renders content passed in props', () => {
	const wrapper = setup()
	const headerComponent = findByTestAttr(wrapper, 'component-header').text()
	expect(headerComponent).toBe('some content')
})

test('renders with passed style in props', () => {
	const wrapper = setup()
	const headerComponent = findByTestAttr(wrapper, 'component-header')
	const styles = headerComponent.prop('style')
	expect(styles).toEqual({
		fontSize: 'some value',
		color: 'some color',
		textAlign: 'some align',
	})
})
