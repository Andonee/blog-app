import React from 'react'
import styles from './AboutUs.module.scss'
import { Image } from '../../../UI'

const AboutUs = () => {
	return (
		<div className={`${styles.aboutUs}`}>
			<p className={styles.aboutUs_title}>About Us</p>
			<div className={styles.aboutUs_img}>
				<Image
					src='https://via.placeholder.com/400x250'
					alt='Awesome Travel Blog Team'
				/>
			</div>

			<p className={styles.aboutUs_description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
				nisl non augue suscipit porta. Proin ut odio vulputate, molestie nisi
				nec, vulputate ante. Ut luctus lacus vitae turpis rhoncus, et feugiat
				enim ultrices. Nullam ex felis, venenatis et risus vel, cursus laoreet
				metus.
				<br />
				<br />
				Morbi tincidunt elit ut risus ullamcorper interdum. Cras magna sem,
				semper ac blandit scelerisque, ultricies vitae tortor. Integer tortor
				sem, iaculis eu ultricies eu, sagittis facilisis massa. Morbi a massa
				sed eros ultricies tempor nec quis felis. Phasellus aliquam a dui sit
				amet malesuada.
			</p>
			<p className={styles.aboutUs_title}>Follow Us</p>
			<ul className={styles.aboutUs_social}>
				<li>
					<i className='fab fa-facebook'></i>
				</li>
				<li>
					<i className='fab fa-twitter'></i>
				</li>
				<li>
					<i className='fab fa-instagram-square'></i>
				</li>
			</ul>
		</div>
	)
}

export default AboutUs
