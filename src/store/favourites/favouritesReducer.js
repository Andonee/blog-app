import { TOGGLE_FAVOURITES } from './favourtiesTypes'

// This checkout is needed for testing purpose
const checkout =
	typeof window !== 'undefined'
		? JSON.parse(localStorage.getItem('favourites'))
		: []

const initState = checkout

const favouritesReducer = (state = initState || [], action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITES:
			const selectedPost = action.payload

			const isFavourite = state.find(post => post.id === selectedPost.id)

			if (isFavourite) {
				const FavouritePosts = state.filter(post => post.id !== selectedPost.id)
				typeof window !== 'undefined' &&
					localStorage.setItem('favourites', JSON.stringify(FavouritePosts))
				return FavouritePosts
			} else {
				const newState = [...state, selectedPost]
				typeof window !== 'undefined' &&
					localStorage.setItem('favourites', JSON.stringify(newState))
				return newState
			}

		default:
			return state
	}
}

export default favouritesReducer
