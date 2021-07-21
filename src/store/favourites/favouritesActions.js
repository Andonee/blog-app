import { TOGGLE_FAVOURITES } from './favourtiesTypes'

export const toggleFavourites = payload => {
	return { type: TOGGLE_FAVOURITES, payload }
}
