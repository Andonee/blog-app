import React from 'react'
import { Jumbo } from '../../UI'
import PopularPosts from './PopularPosts/PopularPosts'
import RecentPosts from './RecentPosts/RecentPosts'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.home}>
			<Jumbo />
			<PopularPosts />
			<RecentPosts />
		</div>
	)
}

export default Home
