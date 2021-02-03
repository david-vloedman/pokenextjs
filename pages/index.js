import Head from 'next/head'
import Layout from '../components/Layout'
import DetailView from '../components/pokemon/DetailView'
import PokemonCard from '../containers/Pokemon-card'

const POKEMON_INDEX = process.env.api.pokemon

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
			<Head>
				<title>Pokenext</title>
			</Head>
			{/* <DetailView props={props} /> */}
			<PokemonCard pokemon={testPokemon} />
		</Layout>
	)
}

async function getAbilityDetails(url) {
	const response = await fetch(url)
	const json = await response.json()
	return json
}

export async function getStaticProps() {
	try {
		const charmanderUrl = `${POKEMON_INDEX}${1}`
		const response = await fetch(charmanderUrl)
		const json = await response.json()
		const abilities = json.abilities.map((a) => a.ability)
		const details = await Promise.all(
			abilities.map(async (a) => {
				return {
					name: a.name,
					details: await getAbilityDetails(a.url),
				}
			})
		)

		return {
			props: {
				...json,
				abilities: details,
			},
		}
	} catch (error) {
		console.error(error)
		return {
			props: {},
		}
	}
}
