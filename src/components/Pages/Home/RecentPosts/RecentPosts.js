import React from 'react'
import styles from './RecentPosts.module.scss'
import {
	Header,
	Card,
	Button,
	ErrorBoundary,
	FetchDataError,
	Spinner,
} from '../../../UI'
import AboutUs from '../AboutUs/AboutUs'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const RecentPosts = ({ posts }) => {
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
				{posts.error && <FetchDataError />}
				{posts.isLoading ? (
					<Spinner />
				) : (
					<div className={`${styles.recentPosts_posts} grid`}>
						{/* Mocking list of 6 recent posts */}
						{posts.data.slice(0, 6).map(post => {
							return (
								<Card
									img='https://via.placeholder.com/400x250'
									title={post.title}
									id={post.id}
									key={post.id}
								/>
							)
						})}
					</div>
				)}
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

const mapStateToProps = state => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps)(RecentPosts)
