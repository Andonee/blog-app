import React from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = ({ openNavbarHandler }) => {
	return (
		<ul className={styles.navigation}>
			<li className={styles.navigation_link} onClick={openNavbarHandler}>
				<NavLink activeClassName={styles.navigation___active} exact to='/'>
					Home
				</NavLink>
			</li>
			<li className={styles.navigation_link} onClick={openNavbarHandler}>
				<NavLink activeClassName={styles.navigation___active} to='/articles'>
					Articles
				</NavLink>
			</li>
			<li className={styles.navigation_link} onClick={openNavbarHandler}>
				<NavLink activeClassName={styles.navigation___active} to='/contact'>
					Contact
				</NavLink>
			</li>
		</ul>
	)
}

export default Navigation
