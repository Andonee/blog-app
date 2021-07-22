import { TOGGLE_FAVOURITES } from './favourtiesTypes'
import { toggleFavourites } from './favouritesActions'

describe('toggle favourites', () => {
	test('returns an action with type "TOGGLE_FAVOURITES"', () => {
		const action = toggleFavourites({ title: 'some title' })
		expect(action).toStrictEqual({
			type: TOGGLE_FAVOURITES,
			payload: { title: 'some title' },
		})
	})
})
