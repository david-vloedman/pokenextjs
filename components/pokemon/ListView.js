import Styles from '../../styles/List.module.css'
import PokemonCard from '../../containers/Pokemon-card'

export default function ListView({ props }) {
	const { results } = props

	if (!results) return null

	return results.map((item) => (
		<ListItemContainer>
			<PokemonCard key={item.id} pokemon={item} />
		</ListItemContainer>
	))
}

const ListItemContainer = ({ children }) => (
	<div className={Styles.list_item_container}>{children}</div>
)
