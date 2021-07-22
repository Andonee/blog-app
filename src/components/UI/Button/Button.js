import React from 'react'
import styles from './Button.module.scss'

const Button = ({ font, onClick, children }) => {
	return (
		<button
			data-test='component-button'
			onClick={onClick}
			className={styles.button}
			style={{ fontSize: font }}>
			{children}
		</button>
	)
}

export default Button
