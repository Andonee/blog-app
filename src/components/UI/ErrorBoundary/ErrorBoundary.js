import React, { Component } from 'react'
import styles from './ErrorBoundary.module.scss'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.log('error', error, 'info', info)
	}
	render() {
		if (this.state.hasError) {
			return <div className={styles.errorBoundary}>Something went wrong :(</div>
		}

		return this.props.children
	}
}

export default ErrorBoundary
