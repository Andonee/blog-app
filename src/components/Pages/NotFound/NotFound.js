import React from 'react'
import styles from './NotFound.module.scss'
import not_found from '../../../assets/images/404.png'
import { Image } from '../../UI'
const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<Image src={not_found} alt='page not found' height='80%' />
		</div>
	)
}

export default NotFound
