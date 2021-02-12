import Styles from '../../styles/PokemonList.module.css'


const Capitalized = ({ word }) => (
	<span className='text-capitalize'>{word}</span>
)

const ImgContainer = ({ children }) => <div>{children}</div>

const Container = ({ children }) => <div className={Styles.pokemon_list_item}>{children}</div>

/**
 *
 * @param {name, sprite, habitat, type} props
 */
export default function ListItem({ props }) {
	return (
		<li>
			<Container>
				
					<img src={props.sprite} />
				
				<Capitalized word={props.name} />
			</Container>
		</li>
	)
}
