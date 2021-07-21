import React from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Navigation = ({ openNavbarHandler, favourites }) => {
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
			{favourites.length > 0 && (
				<li className={styles.navigation_link} onClick={openNavbarHandler}>
					<NavLink
						activeClassName={styles.navigation___active}
						to='/favourites'>
						Favourites
					</NavLink>
				</li>
			)}
			<li className={styles.navigation_link} onClick={openNavbarHandler}>
				<NavLink activeClassName={styles.navigation___active} to='/contact'>
					Contact
				</NavLink>
			</li>
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		favourites: state.favourites,
	}
}

export default connect(mapStateToProps)(Navigation)
