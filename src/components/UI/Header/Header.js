import React from 'react'

const Header = ({ content, size = '2rem', color, align = 'center' }) => {
	return (
		<div
			style={{
				fontSize: size,
				color: color,
				textAlign: align,
				letterSpacing: '5px',
			}}>
			{content}
		</div>
	)
}

export default Header
