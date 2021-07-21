import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
} from './postsTypes'

const initState = {
	isLoading: true,
	data: [],
	error: '',
	favourites: [],
}

const postsReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_POSTS_SUCCESS:
			return {
				isLoading: false,
				data: action.payload,
				error: '',
			}
		case FETCH_POSTS_ERROR:
			return {
				isLoading: false,
				data: [],
				error: action.payload,
			}
		default:
			return state
	}
}

export default postsReducer
