import React from 'react'
import styles from './Contact.module.scss'
import contact from '../../../assets/images/contact.jpg'

const Contact = () => {
	return (
		<div className={`${styles.contact} grid`}>
			<div className={styles.contact_imageContainer}>
				<img src={contact} alt='Contact us' className={styles.contact_image} />
			</div>
			<div className={styles.contact_content}>
				Nunc eget tempor enim. Suspendisse dignissim enim turpis, non lobortis
				mauris elementum ut. Fusce vitae massa neque. Curabitur lobortis
				elementum ligula, et vehicula erat condimentum eu. Proin mattis turpis
				ut nibh viverra, at pretium nunc accumsan. Vestibulum ac risus libero.
				<br />
				<br />
				Nunc eget tempor enim. Suspendisse dignissim enim turpis, non lobortis
				mauris elementum ut. Fusce vitae massa neque. Curabitur lobortis
				elementum ligula, et vehicula erat condimentum eu. Proin mattis turpis
				ut nibh viverra, at pretium nunc accumsan. Vestibulum ac risus libero.{' '}
			</div>
		</div>
	)
}

export default Contact
