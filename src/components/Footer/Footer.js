import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../Navbar/Logo/Logo'
import { Button } from '../UI'
import arrow from '../../assets/icons/arrow-up.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<p className={styles.footer__copyrights}>
				&copy; Awesome Travel Blog. All rights reserved.
			</p>
			<Button text={<img src={arrow} alt='go up' />} />
		</footer>
	)
}

export default Footer
