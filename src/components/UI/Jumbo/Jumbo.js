import React from 'react'
import styles from './Jumbo.module.scss'
import jumbo from '../../../assets/images/jumbo.jpg'

const Jumbo = () => {
	return (
		<figure className={styles.jumbo}>
			<img src={jumbo} className={styles.jumbo_image} />
			<div className={styles.jumbo_text}>
				<h2>The only thing that matters...</h2>
			</div>
		</figure>
	)
}

export default Jumbo
