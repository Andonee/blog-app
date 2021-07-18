import React from 'react'
import './Contact.scss'
import { Image } from '../../UI'
import contact from '../../../assets/images/contact.jpg'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact_image'>
				<img src={contact} alt='Contact us' className='contact_image' />
			</div>
			<div className='contact_content'>
				Nunc eget tempor enim. Suspendisse dignissim enim turpis, non lobortis
				mauris elementum ut. Fusce vitae massa neque. Curabitur lobortis
				elementum ligula, et vehicula erat condimentum eu. Proin mattis turpis
				ut nibh viverra, at pretium nunc accumsan. Vestibulum ac risus libero.{' '}
			</div>
		</div>
	)
}

export default Contact
