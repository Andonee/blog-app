import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Input from './Input'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('renders textarea input type', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(
			<Input
				input='textarea'
				value='some value'
				placeholder='some placeholder'
				name='some name'
				required={true}
			/>
		)
	})
	test('renders without error', () => {
		const textareaComponent = findByTestAttr(
			wrapper,
			'component-input-textarea'
		)
		expect(textareaComponent).toHaveLength(1)
	})

	test('renders placeholder passed in props', () => {
		const textareaComponent = findByTestAttr(
			wrapper,
			'component-input-textarea'
		)
		const placeholder = textareaComponent.prop('placeholder')
		expect(placeholder).toBe('some placeholder')
	})

	test('renders name passed in props', () => {
		const textareaComponent = findByTestAttr(
			wrapper,
			'component-input-textarea'
		)
		const name = textareaComponent.prop('name')
		expect(name).toBe('some name')
	})

	test('renders value passed in props', () => {
		const textareaComponent = findByTestAttr(
			wrapper,
			'component-input-textarea'
		)
		const value = textareaComponent.prop('value')
		expect(value).toBe('some value')
	})

	test('renders required passed in props', () => {
		const textareaComponent = findByTestAttr(
			wrapper,
			'component-input-textarea'
		)
		const required = textareaComponent.prop('required')
		expect(required).toBe(true)
	})
})

describe('renders textarea input type', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(
			<Input
				input='input'
				value='some value'
				placeholder='some placeholder'
				type='some type'
				name='some name'
				required={true}
			/>
		)
	})
	test('renders without error', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		expect(inputComponent).toHaveLength(1)
	})

	test('renders placeholder passed in props', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		const placeholder = inputComponent.prop('placeholder')
		expect(placeholder).toBe('some placeholder')
	})

	test('renders name passed in props', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		const name = inputComponent.prop('name')
		expect(name).toBe('some name')
	})

	test('renders value passed in props', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		const value = inputComponent.prop('value')
		expect(value).toBe('some value')
	})

	test('renders required passed in props', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		const required = inputComponent.prop('required')
		expect(required).toBe(true)
	})

	test('renders type passed in props', () => {
		const inputComponent = findByTestAttr(wrapper, 'component-input-input')
		const type = inputComponent.prop('type')
		expect(type).toBe('some type')
	})
})
