import React from 'react'
import styles from './Comment.module.scss'
import { ErrorBoundary } from '../../../UI'

const Comment = ({ content, author }) => {
	return (
		<ErrorBoundary>
			<div className={styles.comment}>
				<p className={styles.comment_content}>{content}</p>
				<p className={styles.comment_author}>{author}</p>
			</div>
		</ErrorBoundary>
	)
}

export default Comment
