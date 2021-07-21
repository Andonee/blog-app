import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
	ADD_TO_FAVOURITES,
} from './postsTypes'

export const fetchPostsRequest = () => {
	return {
		type: FETCH_POSTS_REQUEST,
	}
}

export const fetchPostsSuccess = posts => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: posts,
	}
}

export const fetchPostsError = error => {
	return {
		type: FETCH_POSTS_ERROR,
		payload: error,
	}
}

export const fetchPosts = () => {
	return async dispatch => {
		try {
			dispatch(fetchPostsRequest)
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')

			if (!response.ok) throw new Error()

			const data = await response.json()

			dispatch(fetchPostsSuccess(data))
		} catch (error) {
			const errorMessage = error.message
			dispatch(fetchPostsError(errorMessage))
		}
	}
}
