import React from 'react'
import './Post.scss'
import { Image, Header, Input, Button } from '../../UI'
import Comment from './Comment/Comment'

const Post = () => {
	return (
		<div className='post'>
			<div className='post_title'>
				<Header content='Title' size='3rem' />
			</div>
			<div className='post_image'>
				<Image src={'https://via.placeholder.com/600/d32776'} alt='title' />
			</div>
			<p className='post_content'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				molestie consequat molestie. Curabitur nec consectetur nisi. Donec id
				justo id dui pharetra facilisis.
			</p>
			<div className='post_comments'>
				<p>Comments</p>
				<div>
					<Comment />
				</div>
				<from className='post_addComment'>
					<Input input='textarea' placeholder='Your comment...' />
					<Input type='text' placeholder='author' />
					<Button text='Add comment' />
				</from>
			</div>
		</div>
	)
}

export default Post
