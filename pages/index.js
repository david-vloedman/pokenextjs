import Layout from '../components/Layout'
import PokemonCard from '../containers/Pokemon-card'

const testPokemon = {
	id: 12,
	name: 'butterfree',
	img:
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
	height: 11,
	weight: 320,
	moves: [{ name: 'flash' }],
}

export default function Home(props) {
	return (
		<Layout>
			<PokemonCard pokemon={testPokemon} />
		</Layout>
	)
}



