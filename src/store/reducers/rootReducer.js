import postsReducer from '../posts/postsReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	posts: postsReducer,
})

export default rootReducer
