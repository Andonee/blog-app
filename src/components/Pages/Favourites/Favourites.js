import React, { useEffect } from 'react'
import styles from './Favourites.module.scss'
import { connect } from 'react-redux'
import CardList from '../../utils/CardList'
import { useHistory } from 'react-router-dom'

const Favourites = ({ favourites }) => {
	const history = useHistory()

	useEffect(() => {
		if (favourites.length === 0) {
			history.replace('/')
		}
	}, [favourites])

	return (
		<div className={`${styles.favourites} grid`}>
			{favourites.length > 0 && <CardList cards={favourites} />}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		favourites: state.favourites,
	}
}

export default connect(mapStateToProps)(Favourites)
