import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt='Awesome Travel Blog' />
		</Link>
	)
}

export default Logo
