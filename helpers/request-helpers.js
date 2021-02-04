export async function getPokemonDetails(url) {
	const response = await fetch(url)
	const data = await response.json()

	if (!data) {
		return { notFound: true }
	}

	const pageData = {
		id: data.id,
		name: data.name,
		img: data.sprites?.other['official-artwork']?.front_default,
		types: data.types?.map((type) => type.type),
		stats: data.stats?.map((obj) => ({
			name: obj.stat?.name,
			stat: obj.base_stat,
		})),
	}

	return {
		...pageData,
	}
}
