import React from 'react'
import './Card.scss'
import fav from '../../../assets/icons/favourite.svg'
import { useHistory } from 'react-router-dom'

const Card = ({ img, title, id }) => {
	const history = useHistory()

	const onCardClick = () => {
		history.replace(`/articles/${id}`)
	}
	return (
		<div className='card' onClick={onCardClick}>
			<img src={img} alt={title} className='card_img' />
			<p className='card_title'>{title}</p>
			<button id={id} className='card_button'>
				<img src={fav} alt='favourite' />
			</button>
		</div>
	)
}

export default Card
