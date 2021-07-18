import React from 'react'
import styles from './Stats.module.scss'
import { Header } from '../../../../UI'

const Stats = ({ stats, text }) => {
	return (
		<div className={styles.stats}>
			<p className={styles.stats_amount}>{stats}</p>
			<Header content={text} />
		</div>
	)
}

export default Stats
