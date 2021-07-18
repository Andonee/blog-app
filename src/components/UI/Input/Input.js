import React from 'react'
import './Input.scss'

const Input = ({ type, value, placeholder }) => {
	return (
		<input
			className='input'
			type={type}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default Input
