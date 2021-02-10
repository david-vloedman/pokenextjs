import {
	requestSuccess,
	requestFail,
	requestPending,
	requestNoResults,
} from '../redux/reducer'

const POKEMON_BASE_URL = process.env.api.pokemon

export async function getPokemonCardData(url, dispatch) {
	dispatch = dispatch
		? dispatch
		: () => console.log('fix me: request-helpers.js ln: 12')

	dispatch(requestPending(true))

	try {
		const response = await fetch(url)

		if (response.status === 404) {
			return dispatch(requestNoResults())
		}

		const data = await response.json()

		const speciesResponse = await fetch(data.species.url)
		const speciesData = await speciesResponse.json()

		const pokemonCardData = mapHabitatToPokemon(data, speciesData)

		dispatch(requestSuccess(pokemonCardData))
	} catch (err) {
		dispatch(requestFail(err))
	}
}

export function mapHabitatToPokemon(pokemonData, habitatData) {
	return {
		id: pokemonData?.id ?? null,
		name: pokemonData?.name ?? null,
		habitat: habitatData?.habitat?.name ?? null,
		img: pokemonData.sprites?.other['official-artwork']?.front_default ?? null,
		types: pokemonData.types?.map((type) => type.type),
		stats: pokemonData.stats?.map((obj) => ({
			name: obj?.stat?.name,
			stat: obj?.base_stat,
		})),
	}
}

export const createSearchFormURL = (keyword) => `${POKEMON_BASE_URL}${keyword}`
