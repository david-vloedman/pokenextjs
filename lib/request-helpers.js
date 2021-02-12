import {
	requestSuccess,
	requestFail,
	requestPending,
	requestNoResults,
} from '../redux/reducer'

const POKEMON_BASE_URL = process.env.api.pokemon

export async function getPokemonCardData(url, dispatch) {

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
		console.log(err)
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

export async function getPokemonSprites(url){
	const res = await fetch(url)
	const data = await res.json()

	return {
		spriteUrl: data.sprites.front_default
	}
}

export async function getAllPokemonNames(url) {
	const initialResponse = await fetch(url)
	const data = await initialResponse.json()

	const allNames = await nameReducer(data.results, data.next, nameReducer)
	
	return allNames
}

const nameReducer = async (names, nextUrl, callback) => {
	const res = await fetch(nextUrl)
	const data = await res.json()

	const { results, next } = data
	if (!next) {
		return names
	}
	if (results) {
		names = names.concat(results)
	}



	return await callback(names, next, nameReducer)
}

export const createSearchFormURL = (keyword) => `${POKEMON_BASE_URL}${keyword}`
