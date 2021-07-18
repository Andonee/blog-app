import React, { useState } from 'react'
import './Navbar.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true)

	const openNavbarHandler = () => {
		setIsOpen(!isOpen)
	}
	return (
		<nav className='navbar'>
			<Logo />
			<div className='navbar_icon' onClick={openNavbarHandler}>
				<i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<div
				className={
					isOpen
						? 'navbar_navigation navbar_navigation--open'
						: 'navbar_navigation'
				}>
				<Navigation openNavbarHandler={openNavbarHandler} />
			</div>
		</nav>
	)
}

export default Navbar
