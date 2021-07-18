import React from 'react'
import './Comment.scss'

const Comment = () => {
	return (
		<div className='comment'>
			<p className='comment_content'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				molestie consequat molestie. Curabitur nec consectetur nisi. Donec id
				justo id dui pharetra facilisis.
			</p>
			<p className='comment_author'>Author</p>
		</div>
	)
}

export default Comment
