import React from 'react'
import styles from './Input.module.scss'

const Input = ({
	type,
	value,
	placeholder,
	input,
	onChange,
	name,
	required = false,
}) => {
	return (
		<>
			{input === 'textarea' ? (
				<textarea
					data-test='component-input-textarea'
					onChange={onChange}
					className={styles.input}
					rows={5}
					placeholder={placeholder}
					name={name}
					value={value}
					required={required}
				/>
			) : (
				<input
					data-test='component-input-input'
					onChange={onChange}
					className={styles.input}
					type={type}
					value={value}
					placeholder={placeholder}
					name={name}
					required={required}
				/>
			)}
		</>
	)
}

export default Input
