import React from 'react'
import styles from './Header.module.scss'

const Header = ({ content, size = '1.6rem', color, align = 'center' }) => {
	return (
		<div
			data-test='component-header'
			style={{
				fontSize: size,
				color: color,
				textAlign: align,
			}}
			className={styles.header}>
			{content}
		</div>
	)
}

export default Header
