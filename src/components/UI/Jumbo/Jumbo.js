import React from 'react'
import './Jumbo.scss'
import jumbo from '../../../assets/images/jumbo.jpg'

const Jumbo = () => {
	return (
		<figure className='jumbo'>
			<img src={jumbo} className='jumbo_image' />
			<div className='jumbo_text'>
				<h2>The only thing that matters...</h2>
			</div>
		</figure>
	)
}

export default Jumbo
