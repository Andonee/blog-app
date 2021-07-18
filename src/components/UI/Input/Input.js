import React from 'react'
import './Input.scss'

const Input = ({ type, value, placeholder, input }) => {
	return (
		<>
			{input === 'textarea' ? (
				<textarea className='input' rows={5} placeholder={placeholder} />
			) : (
				<input
					className='input'
					type={type}
					value={value}
					placeholder={placeholder}
				/>
			)}
		</>
	)
}

export default Input
