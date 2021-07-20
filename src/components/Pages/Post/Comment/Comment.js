import React from 'react'
import styles from './Comment.module.scss'

const Comment = () => {
	return (
		<div className={styles.comment}>
			<p className={styles.comment_content}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				molestie consequat molestie. Curabitur nec consectetur nisi. Donec id
				justo id dui pharetra facilisis.
			</p>
			<p className={styles.comment_author}>Author</p>
		</div>
	)
}

export default Comment
