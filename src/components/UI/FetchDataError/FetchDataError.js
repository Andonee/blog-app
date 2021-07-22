import React from 'react'
import styles from './FetchDataError.module.scss'

const FetchDataError = () => {
	return (
		<div data-test='component-fetchDataError' className={styles.fetchDataError}>
			Some error occured :(
		</div>
	)
}

export default FetchDataError
