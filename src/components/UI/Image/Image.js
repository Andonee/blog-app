import React from 'react'

const Image = ({ src, alt, width = 'auto', height }) => {
	return (
		<img
			data-test='component-image'
			src={src}
			alt={alt}
			style={{ width: width, height: height }}
		/>
	)
}

export default Image
