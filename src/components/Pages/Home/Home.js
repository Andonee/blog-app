import React from 'react'
import { Jumbo } from '../../UI'
import PopularPosts from './PopularPosts/PopularPosts'
import RecentPosts from './RecentPosts/RecentPosts'

const Home = () => {
	return (
		<div>
			<Jumbo />
			<PopularPosts />
			<RecentPosts />
		</div>
	)
}

export default Home
