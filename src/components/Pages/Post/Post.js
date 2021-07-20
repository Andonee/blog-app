import React, { useEffect, useState } from 'react'
import styles from './Post.module.scss'
import { Image, Header, Input, Button, ErrorBoundary } from '../../UI'
import Comment from './Comment/Comment'
import { nanoid } from 'nanoid'

const Post = props => {
	const [postComments, setPostComments] = useState({ postId: '', comments: [] })
	const [commentsFetchError, setCommentsFetchError] = useState(false)
	const [newComment, setNewComment] = useState({
		comment: {
			name: '',
			email: '',
			body: '',
			id: '',
			postId: '',
		},
		error: false,
	})

	useEffect(() => {
		console.log(props.match.params.id)
		const postId = props.match.params.id
		setPostComments(prevState => ({
			...prevState,
			postId: postId,
		}))

		const getComments = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
				)

				if (!response.ok) throw new Error()

				const data = await response.json()
				console.log(data)
				setPostComments(prevState => ({
					...prevState,
					comments: data,
				}))
			} catch {
				setCommentsFetchError(true)
			}
		}

		getComments()
	}, [])

	const onInputChange = e => {
		setNewComment(prevState => ({
			...prevState,
			comment: {
				...prevState.comment,
				[e.target.name]: e.target.value,
			},
		}))
	}

	const onCommentSubmit = async e => {
		try {
			e.preventDefault()

			const createdComment = {
				...newComment.comment,
				postId: postComments.postId,
				id: nanoid(7),
			}

			const response = await fetch(
				'https://jsonplaceholder.typicode.com/comments',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify(createdComment),
				}
			)

			if (!response.ok) throw new Error()

			const data = await response?.json()

			// if response is OK manually adding data to state

			const commentsList = postComments.comments.concat(createdComment)
			setPostComments(prevState => ({
				...prevState,
				comments: commentsList,
			}))
			setNewComment(prevState => ({
				error: false,
				comment: {
					name: '',
					email: '',
					body: '',
					id: '',
					postId: '',
				},
			}))
		} catch {
			setNewComment(prevState => ({
				...prevState,
				error: true,
			}))
		}
	}

	return (
		<div className={styles.post}>
			<ErrorBoundary>
				<div className={styles.post_title}>
					<Header content={'Title'} size='3rem' />
				</div>
			</ErrorBoundary>
			<div className={styles.post_image}>
				<Image src={'https://via.placeholder.com/600/d32776'} alt='title' />
			</div>
			<ErrorBoundary>
				<p className={styles.post_content}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					molestie consequat molestie. Curabitur nec consectetur nisi. Donec id
					justo id dui pharetra facilisis.
				</p>
			</ErrorBoundary>
			<div className={styles.post_comments}>
				<p>Comments</p>
				<ErrorBoundary>
					{commentsFetchError ? (
						<p className={styles.post_fetchError}>
							Could not fetch comments :(
						</p>
					) : (
						<>
							{postComments.comments.map(comment => {
								return (
									<Comment
										key={comment.id}
										content={comment.body}
										author={comment.name}
									/>
								)
							})}
						</>
					)}
				</ErrorBoundary>
				<ErrorBoundary>
					{newComment.error && (
						<p className={styles.post_addComment_error}>
							Some error occured. Try again
						</p>
					)}
					<form onSubmit={onCommentSubmit} className={styles.post_addComment}>
						<Input
							onChange={onInputChange}
							name='body'
							input='textarea'
							placeholder='Your comment...'
							value={newComment.comment.body}
							required={true}
						/>
						<Input
							onChange={onInputChange}
							name='name'
							type='text'
							placeholder='name'
							value={newComment.comment.name}
							required={true}
						/>
						<Input
							onChange={onInputChange}
							name='email'
							type='email'
							placeholder='email'
							value={newComment.comment.email}
						/>
						<Button text='Add comment' />
					</form>
				</ErrorBoundary>
			</div>
		</div>
	)
}

export default Post
