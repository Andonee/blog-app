import { TOGGLE_FAVOURITES } from './favourtiesTypes'

const initState = JSON.parse(localStorage.getItem('favourites')) || []

const favouritesReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITES:
			const selectedPost = action.payload

			const isFavourite = state.find(post => post.id === selectedPost.id)

			if (isFavourite) {
				const FavouritePosts = state.filter(post => post.id !== selectedPost.id)
				localStorage.setItem('favourites', JSON.stringify(FavouritePosts))
				return FavouritePosts
			} else {
				const newState = [...state, selectedPost]
				localStorage.setItem('favourites', JSON.stringify(newState))
				return newState
			}

		default:
			return state
	}
}

export default favouritesReducer
