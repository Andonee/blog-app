import React from 'react'
import styles from './RecentPosts.module.scss'
import { Header, Card, Button } from '../../../UI'
import AboutUs from '../AboutUs/AboutUs'

const RecentPosts = () => {
	return (
		<section className={styles.recentPosts}>
			<div className={styles.recentPosts_header}>
				<Header content='Recent Posts' />
			</div>

			<div className={`${styles.recentPosts_posts} grid`}>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
			</div>
			<div className={styles.recentPosts_aboutUs}>
				<AboutUs />
			</div>

			<div className={styles.recentPosts_button}>
				<Button text='All Posts' font='1.5rem' />
			</div>
		</section>
	)
}

export default RecentPosts
