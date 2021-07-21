import { useState, useEffect } from 'react'

const useFetch = (method, url, body) => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					method: method,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify(body),
				})

				if (!response.ok) throw new Error()

				const data = await response?.json()
				setData(data)
				setIsLoading(false)
			} catch (error) {
				setError(true)
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return { isLoading, data, error }
}

export default useFetch
