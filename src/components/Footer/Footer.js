import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../Navbar/Logo/Logo'

const Footer = () => {
	const scrollToTopHandler = () => {
		document.getElementById('nav').scrollIntoView({
			behavior: 'smooth',
		})
	}
	return (
		<footer className={styles.footer}>
			<Logo />
			<p className={styles.footer_copyrights}>
				&copy; Awesome Travel Blog. All rights reserved.
			</p>
			<button className={styles.footer_button} onClick={scrollToTopHandler}>
				<i className='fas fa-arrow-alt-circle-up'></i>
			</button>
		</footer>
	)
}

export default Footer
