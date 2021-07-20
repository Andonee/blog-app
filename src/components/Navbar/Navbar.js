import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openNavbarHandler = () => {
		setIsOpen(!isOpen)
	}
	return (
		<nav className={styles.navbar}>
			<Logo />
			<div className={styles.navbar_icon} onClick={openNavbarHandler}>
				<i className={isOpen ? `fas fa-times` : `fas fa-bars`}></i>
			</div>
			<div
				className={
					isOpen
						? `${styles.navbar} ${styles.navbar_navigation} ${styles.navbar_navigation___open}`
						: `${styles.navbar_navigation}`
				}>
				<Navigation openNavbarHandler={openNavbarHandler} />
			</div>
		</nav>
	)
}

export default Navbar
