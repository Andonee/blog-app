import React from 'react'
import './Button.scss'

const Button = ({ text, font, onClick }) => {
	return (
		<button onClick={onClick} className='button' style={{ fontSize: font }}>
			{text}
		</button>
	)
}

export default Button
