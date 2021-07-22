import { TOGGLE_FAVOURITES } from './favourtiesTypes'
import favouritesRerucer from './favouritesReducer'

test('return previous state when passed action is unknown', () => {
	const newState = favouritesRerucer([], { type: 'some type' })
	expect(newState).toStrictEqual([])
})

test('add post to favourites', () => {
	const newState = favouritesRerucer([], {
		type: TOGGLE_FAVOURITES,
		payload: { id: 1, title: 'some post' },
	})
	expect(newState).toStrictEqual([{ id: 1, title: 'some post' }])
})

test('removes post from favourites', () => {
	const newState = favouritesRerucer([{ id: 1, title: 'some post' }], {
		type: TOGGLE_FAVOURITES,
		payload: { id: 1, title: 'some post' },
	})
	expect(newState).toStrictEqual([])
})
