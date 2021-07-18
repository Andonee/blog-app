import React from 'react'
import styles from './RecentPosts.module.scss'
import { Header, Card, Button } from '../../../UI'
import AboutUs from '../AboutUs/AboutUs'

const RecentPosts = () => {
	return (
		<section>
			<Header content='Recent Posts' />
			<div>
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
			<AboutUs />
			<Button text='All Posts' font='1.5rem' />
		</section>
	)
}

export default RecentPosts
