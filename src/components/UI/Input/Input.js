import React from 'react'
import styles from './Input.module.scss'

const Input = ({ type, value, placeholder, input }) => {
	return (
		<>
			{input === 'textarea' ? (
				<textarea className={styles.input} rows={5} placeholder={placeholder} />
			) : (
				<input
					className={styles.input}
					type={type}
					value={value}
					placeholder={placeholder}
				/>
			)}
		</>
	)
}

export default Input
