import React from 'react'
import './Footer.scss'
import Logo from '../../Navbar/Logo/Logo'
import { Button } from '..'
import arrow from '../../../assets/icons/arrow-up.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<Logo />
			<p className='footer_copyrights'>
				&copy; Awesome Travel Blog. All rights reserved.
			</p>
			<Button text={<img src={arrow} alt='go up' />} />
		</footer>
	)
}

export default Footer
