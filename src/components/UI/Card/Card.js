import React from 'react'
import styles from './Card.module.scss'
import { useHistory } from 'react-router-dom'

const Card = ({ img, title, id }) => {
	const history = useHistory()

	const onCardClick = () => {
		history.replace(`/articles/${id}`)
	}
	return (
		<div className={styles.card} onClick={onCardClick}>
			<img src={img} alt={title} className={styles.card_img} />
			<p className={styles.card_title}>{title}</p>
			<button id={id} className={styles.card_button}>
				{/* <img src={fav} alt='favourite' /> */}
				<i className='far fa-heart'></i>
			</button>
		</div>
	)
}

export default Card
