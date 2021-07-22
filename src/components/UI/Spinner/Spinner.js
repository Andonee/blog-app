import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => {
	return (
		<div className={styles.loader} data-test='component-spinner'>
			Loading...
		</div>
	)
}

export default Spinner
