import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Image from './Image'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () =>
	shallow(
		<Image
			src='some src'
			alt='some alt'
			width='some width'
			height='some height'
		/>
	)

test('renders without error', () => {
	const wrapper = setup()
	const imageComponent = findByTestAttr(wrapper, 'component-image')
	expect(imageComponent).toHaveLength(1)
})

test('renders with passed style in props', () => {
	const wrapper = setup()
	const imageComponent = findByTestAttr(wrapper, 'component-image')
	const styles = imageComponent.prop('style')
	expect(styles).toEqual({
		width: 'some width',
		height: 'some height',
	})
})

test('renders src passed in props', () => {
	const wrapper = setup()
	const imageComponent = findByTestAttr(wrapper, 'component-image')
	const src = imageComponent.prop('src')
	expect(src).toBe('some src')
})

test('renders alt passed in props', () => {
	const wrapper = setup()
	const imageComponent = findByTestAttr(wrapper, 'component-image')
	const alt = imageComponent.prop('alt')
	expect(alt).toBe('some alt')
})
