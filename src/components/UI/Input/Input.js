import React from 'react'
import './Input.scss'

const Input = ({ type, value, placeholder }) => {
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			className='input'
		/>
	)
}

export default Input
