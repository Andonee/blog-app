import React from 'react'
import './Stats.scss'
import { Header } from '../../../../UI'

const Stats = ({ stats, text }) => {
	return (
		<div className='stats'>
			<p className='stats_amount'>{stats}</p>
			<Header content={text} />
		</div>
	)
}

export default Stats
