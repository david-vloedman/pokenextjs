import Link from 'next/link'
import styles from '../../styles/List.module.css'
import PokemonCard from '../../containers/Pokemon-card'

export default function ListView({ props }) {
	const { results } = props

  if(!results) return null;

	return results.map((item) => <PokemonCard key={item.id} pokemon={item} />)
}

const ListItem = ({ item }) => {
	return (
		<Link href={`/details/pokemon/${item.id}`}>
			<li className={styles.indexListItem}>
				<img src={item.imgUrl} className={styles.thumbnail} />
				<Capitialized word={item.name} />
			</li>
		</Link>
	)
}

const Capitialized = ({ word }) => (
	<span className={'text-capitalize'}>{word}</span>
)
