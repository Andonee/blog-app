import React from 'react'
import styles from './Button.module.scss'

const Button = ({ font, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className={styles.button}
			style={{ fontSize: font }}>
			{children}
		</button>
	)
}

export default Button
