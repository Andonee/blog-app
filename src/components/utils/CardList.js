import React from 'react'
import { Card } from '../UI'

const CardList = ({ cards }) => {
	return cards.map(post => {
		return (
			<Card
				img='https://via.placeholder.com/400x250'
				post={post}
				key={post.id}
			/>
		)
	})
}

export default CardList
