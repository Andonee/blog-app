import React from 'react'
import styles from './Jumbo.module.scss'
import jumbo from '../../../assets/images/jumbo.jpg'

const Jumbo = () => {
	return (
		<figure className={styles.jumbo} data-test='component-jumbo'>
			<img src={jumbo} className={styles.jumbo_image} data-test='jumbo-image' />
			<div className={styles.jumbo_text} data-test='jumbo-text'>
				<h2 data-test='jumbo-header'>The only thing that matters...</h2>
			</div>
		</figure>
	)
}

export default Jumbo
