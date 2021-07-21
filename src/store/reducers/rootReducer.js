import postsReducer from '../posts/postsReducer'
import favouritesReducer from '../favourites/favouritesReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	posts: postsReducer,
	favourites: favouritesReducer,
})

export default rootReducer
