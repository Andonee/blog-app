import React, { useEffect, useState } from 'react'
import styles from './Post.module.scss'
import { Image, Header, Input, Button, ErrorBoundary, Spinner } from '../../UI'
import Comment from './Comment/Comment'
import { nanoid } from 'nanoid'
import useFetch from '../../../hooks/useFetch'
import { connect } from 'react-redux'

const Post = ({ match, post }) => {
	const [postComments, setPostComments] = useState({ postId: '', comments: [] })
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
	const [postDetails, setPostDetails] = useState({})

	const { title, body } = postDetails

	let { isLoading, data, error } = useFetch(
		'GET',
		`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`
	)

	useEffect(() => {
		const postId = match.params.id

		setPostDetails(post)

		setPostComments({
			comments: data,
			postId: postId,
		})
	}, [data])

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

			// if response is OK manually adding data to state

			const commentsList = postComments.comments.concat(createdComment)
			setPostComments(prevState => ({
				...prevState,
				comments: commentsList,
			}))

			setNewComment({
				error: false,
				comment: {
					name: '',
					email: '',
					body: '',
					id: '',
					postId: '',
				},
			})
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
					<Header content={title} size='3rem' />
				</div>
			</ErrorBoundary>
			<div className={styles.post_image}>
				<Image src={'https://via.placeholder.com/600/d32776'} alt={title} />
			</div>
			<ErrorBoundary>
				<p className={styles.post_content}>{body}</p>
			</ErrorBoundary>
			<div className={styles.post_comments}>
				<p>Comments</p>
				{error && (
					<p className={styles.post_fetchError}>Could not fetch comments :(</p>
				)}
				<ErrorBoundary>
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{postComments.comments?.map(comment => {
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
						<Button>Add comment</Button>
					</form>
				</ErrorBoundary>
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	let postId = parseInt(ownProps.match.params.id)
	return {
		post: state.posts.data.find(post => post.id === postId),
	}
}

export default connect(mapStateToProps)(Post)
