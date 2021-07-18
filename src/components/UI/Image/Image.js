import React from 'react'

const Image = ({ src, render }) => {
	return (
		<div>
			{render(
				'https://ptmpolska.pl/media/djcatalog2/images/item/9/naczepa-typu-jumbo.3_f.jpg'
			)}
		</div>
	)
}

export default Image
