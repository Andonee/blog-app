import React from 'react'
import styles from './Post.module.scss'
import { Image, Header, Input, Button } from '../../UI'
import Comment from './Comment/Comment'

const Post = () => {
	return (
		<div className={styles.post}>
			<div className={styles.post_title}>
				<Header content='Title' size='3rem' />
			</div>
			<div className={styles.post_image}>
				<Image src={'https://via.placeholder.com/600/d32776'} alt='title' />
			</div>
			<p className={styles.post_content}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				molestie consequat molestie. Curabitur nec consectetur nisi. Donec id
				justo id dui pharetra facilisis.
			</p>
			<div className={styles.post_comments}>
				<p>Comments</p>
				<div>
					<Comment />
				</div>
				<form className={styles.post_addComment}>
					<Input input='textarea' placeholder='Your comment...' />
					<Input type='text' placeholder='author' />
					<Button text='Add comment' />
				</form>
			</div>
		</div>
	)
}

export default Post
