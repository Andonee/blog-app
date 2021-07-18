import React from 'react'
import styles from './Button.module.scss'

const Button = ({ text, font, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={styles.button}
			style={{ fontSize: font }}>
			{text}
		</button>
	)
}

export default Button
