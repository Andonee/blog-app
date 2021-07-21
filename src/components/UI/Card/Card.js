import React from 'react'
import styles from './Card.module.scss'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleFavourites } from '../../../store/favourites/favouritesActions'

const Card = ({ post, img, addToFav, favourites }) => {
	const history = useHistory()

	const { title, id } = post

	const onCardClick = e => {
		e.stopPropagation()
		history.push(`/articles/${id}`)
	}

	const addToFavourite = e => {
		e.stopPropagation()

		addToFav(post)
	}

	const removeFromFavourites = e => {
		e.stopPropagation()

		removeFromFavourites(post)
	}

	let cardIcon = 'far'

	if (favourites.find(favPost => favPost.id === post.id)) {
		cardIcon = 'fas'
	}

	return (
		<div className={styles.card} onClick={onCardClick}>
			<img src={img} alt={title} className={styles.card_img} />
			<p className={styles.card_title}>{title}</p>
			<button id={id} className={styles.card_button} onClick={addToFavourite}>
				<i className={`${cardIcon} fa-heart`}></i>
			</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		favourites: state.favourites,
	}
}

const mapDispatchToProps = dispatch => ({
	addToFav: post => dispatch(toggleFavourites(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
