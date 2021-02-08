import PokemonCard from '../../../containers/Pokemon-card'
import { getPokemonDetails } from '../../../lib/request-helpers'

const POKEMON_ROOT = process.env.api.pokemon

function DetailPage(props) {
	return <PokemonCard pokemon={props} />
}

export async function getServerSideProps(context) {
	const id = context.params.id
	const url = `${POKEMON_ROOT}${id}`
	const data = await getPokemonDetails(url)

	return {
		props: {
			...data,
		},
	}
}

export default DetailPage
