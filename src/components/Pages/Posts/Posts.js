import React, { useState } from 'react'
import styles from './Posts.module.scss'
import { Card, FetchDataError, Input, Spinner, Button } from '../../UI'
import { connect } from 'react-redux'

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
					{posts.data
						.filter(post => post.title.toLowerCase().includes(filterPhrase))
						.map(post => {
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
		</div>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps)(Posts)
