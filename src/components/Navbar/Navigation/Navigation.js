import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'

const Navigation = ({ openNavbarHandler }) => {
	return (
		<ul className='navigation'>
			<li className='navigation_link' onClick={openNavbarHandler}>
				<NavLink activeClassName='navigation--active' exact to='/'>
					Home
				</NavLink>
			</li>
			<li className='navigation_link' onClick={openNavbarHandler}>
				<NavLink activeClassName='navigation--active' to='/articles'>
					Articles
				</NavLink>
			</li>
			<li className='navigation_link' onClick={openNavbarHandler}>
				<NavLink activeClassName='navigation--active' to='/contact'>
					Contact
				</NavLink>
			</li>
		</ul>
	)
}

export default Navigation
