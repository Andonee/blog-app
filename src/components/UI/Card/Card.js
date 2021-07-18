import React from 'react'
import './Card.scss'
import fav from '../../../assets/icons/favourite.svg'

const Card = ({ img, title, id }) => {
	return (
		<div className='card'>
			<img src={img} alt={title} className='card_img' />
			<p className='card_title'>{title}</p>
			<button id={id} className='card_button'>
				<img src={fav} alt='favourite' />
			</button>
		</div>
	)
}

export default Card
