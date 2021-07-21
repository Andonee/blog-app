import React, { useState } from 'react'
import styles from './Posts.module.scss'
import { FetchDataError, Input, Spinner, Button } from '../../UI'
import { connect } from 'react-redux'
import CardList from '../../utils/CardList'

const Posts = ({ posts }) => {
	const [filterPhrase, setFilterPhrase] = useState('')

	const filterPostsHandler = e => {
		setFilterPhrase(e.target.value.toLowerCase())
	}

	const onFilterClearHandler = () => {
		setFilterPhrase('')
	}

	return (
		<div className={styles.posts}>
			<div className={styles.posts_search}>
				<Input
					type='text'
					placeholder='search'
					onChange={filterPostsHandler}
					value={filterPhrase}
				/>
				<Button onClick={onFilterClearHandler}>Clear</Button>
			</div>
			{posts.error && <FetchDataError />}
			{posts.isLoading ? (
				<Spinner />
			) : (
				<div className={`${styles.posts_list} grid`}>
					<CardList
						cards={posts.data.filter(post =>
							post.title.toLowerCase().includes(filterPhrase)
						)}
					/>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps)(Posts)
