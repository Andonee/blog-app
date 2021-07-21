import React from 'react'
import styles from './PopularPosts.module.scss'
import { Header, ErrorBoundary, FetchDataError, Spinner } from '../../../UI'
import Stats from './Stats/Stats'
import { connect } from 'react-redux'
import CardList from '../../../utils/CardList'

const PopularPosts = ({ posts }) => {
	return (
		<section className={styles.popularPosts}>
			<Header content='Popular Posts' />
			<ErrorBoundary>
				{posts.error && <FetchDataError />}
				{posts.isLoading ? (
					<Spinner />
				) : (
					<div className={`${styles.popularPosts_list} grid`}>
						{/* Mocking list of 3 popular posts */}
						<CardList cards={posts.data.slice(0, 3)} />
					</div>
				)}
			</ErrorBoundary>
			<div className={`${styles.popularPosts_stats} grid`}>
				<Stats stats='550' text='Total Articles' />
				<Stats stats='780' text='Total Posts' />
				<Stats stats='940' text='Total Comments' />
				<Stats stats='1 M' text='Possibilities' />
			</div>
		</section>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps)(PopularPosts)
