import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Button from './Button'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<Button font='15rem'>Some Button</Button>)

test('renders without error', () => {
	const wrapper = setup()
	const buttonComponent = findByTestAttr(wrapper, 'component-button')
	expect(buttonComponent).toHaveLength(1)
})

test('renders text passed in children props', () => {
	const wrapper = setup()
	const buttonComponent = findByTestAttr(wrapper, 'component-button').text()
	expect(buttonComponent).toBe('Some Button')
})

test('renders with passed fontSize in props', () => {
	const wrapper = setup()
	const buttonComponent = findByTestAttr(wrapper, 'component-button')
	const fontSize = buttonComponent.prop('style')
	expect(fontSize).toEqual({ fontSize: '15rem' })
})
