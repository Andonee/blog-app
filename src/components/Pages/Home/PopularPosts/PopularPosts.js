import React from 'react'
import styles from './PopularPosts.module.scss'
import { Header, Card } from '../../../UI'
import Stats from './Stats/Stats'

const PopularPosts = () => {
	return (
		<section className={styles.popularPosts}>
			<Header content='Popular Posts' />
			<div className={`${styles.popularPosts_list} grid`}>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					title='some title'
					id='1'
				/>
			</div>
			<div className={`${styles.popularPosts_stats} grid`}>
				<Stats stats='550' text='Total Articles' />
				<Stats stats='780' text='Total Posts' />
				<Stats stats='940' text='Total Comments' />
				<Stats stats='1 M' text='Possibilities' />
			</div>
		</section>
	)
}

export default PopularPosts
