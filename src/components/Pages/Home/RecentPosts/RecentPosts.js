import React from 'react'
import styles from './RecentPosts.module.scss'
import { Header, Card, Button, ErrorBoundary } from '../../../UI'
import AboutUs from '../AboutUs/AboutUs'
import { useHistory } from 'react-router-dom'

const RecentPosts = () => {
	const history = useHistory()

	const goToAllArticles = () => {
		history.push('/articles')
	}

	return (
		<section className={styles.recentPosts}>
			<div className={styles.recentPosts_header}>
				<Header content='Recent Posts' />
			</div>
			<ErrorBoundary>
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
			</ErrorBoundary>
			<div className={styles.recentPosts_aboutUs}>
				<AboutUs />
			</div>

			<div className={styles.recentPosts_button}>
				<Button font='1.5rem' onClick={goToAllArticles}>
					All Posts
				</Button>
			</div>
		</section>
	)
}

export default RecentPosts
