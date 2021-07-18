import React from 'react'
import './NotFound.scss'
import not_found from '../../../assets/images/404.png'
import { Image } from '../../UI'
const NotFound = () => {
	return (
		<div className='notFound'>
			<Image src={not_found} alt='page not found' height='80%' />
		</div>
	)
}

export default NotFound
