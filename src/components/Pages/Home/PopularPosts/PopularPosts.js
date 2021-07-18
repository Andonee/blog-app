import React from 'react'
import styles from './PopularPosts.module.scss'
import { Header, Card } from '../../../UI'
import Stats from './Stats/Stats'

const PopularPosts = () => {
	return (
		<section>
			<Header content='Popular Posts' size='72px' />
			<div>
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
			<div className={styles.PopularPosts_stats}>
				<Stats stats='550' text='Total Articles' />
				<Stats stats='550' text='Total Articles' />
				<Stats stats='550' text='Total Articles' />
				<Stats stats='550' text='Total Articles' />
			</div>
		</section>
	)
}

export default PopularPosts
