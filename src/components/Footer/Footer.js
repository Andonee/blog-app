import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../Navbar/Logo/Logo'
import { Button } from '../UI'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<p className={styles.footer_copyrights}>
				&copy; Awesome Travel Blog. All rights reserved.
			</p>
			<button className={styles.footer_button}>
				<i className='fas fa-arrow-alt-circle-up'></i>
			</button>
		</footer>
	)
}

export default Footer
