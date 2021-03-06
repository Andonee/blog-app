import React from 'react'
import styles from './RecentPosts.module.scss'
import {
	Header,
	Button,
	ErrorBoundary,
	FetchDataError,
	Spinner,
} from '../../../UI'
import AboutUs from '../AboutUs/AboutUs'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import CardList from '../../../utils/CardList'

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
						<CardList cards={posts.data.slice(0, 6)} />
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
