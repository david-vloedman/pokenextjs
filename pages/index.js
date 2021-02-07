import Layout from '../components/Layout'
import Link from 'next/link'
import useRequest from '../custom-hooks/useRequest'
import Styles from '../styles/Components.module.css'

const testPokemon = {
	id: 12,
	name: 'butterfree',
	img:
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
	height: 11,
	weight: 320,
	moves: [{ name: 'flash' }],
}


const Test = () => {
	const {error, data, isPending} = useRequest('https://pokeapi.co/api/v2/contest-type/');
	
	if(error){
		return <p>Error</p>
	}
	if(isPending){
		return <p>Loading...</p>
	}
	return <p>{JSON.stringify(data)}</p>
}


export default function Home(props) {
	return (
		<Layout>
			<div className={Styles.brand_text}>

			
			<h3>Welcome to PokenextJs</h3>
			<p>This is an educational project, using NextJS and data from the PokeApi.</p>
			<h5>Some routes until navigation is setup</h5>
			<ul>
				<li>
					<div className={Styles.brand_text}>
					<Link href={'/lists/pokemon/1'} >/links/pokemon/1</Link>
					</div>
					<p>
						Shows a paginated list of all Pokemon in the PokeAPI. It uses a dynamic route where 1 is the page.
						It shows a 'PokemonCard' for each pokemon and dynamically renders the background image based on the habitat of the Pokemon.
					</p>
				</li>
			</ul>
			</div>
		</Layout>
	)
}



