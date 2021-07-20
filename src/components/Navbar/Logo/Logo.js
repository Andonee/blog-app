import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<Link className={styles.logo} to='/'>
			<img src={logo} alt='Awesome Travel Blog' />
		</Link>
	)
}

export default Logo
