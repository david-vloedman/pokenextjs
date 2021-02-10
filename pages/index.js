import Link from 'next/link'
import Styles from '../styles/Components.module.css'


export default function Home(props) {
	return (
		<div>
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
			</div>
	)
}



