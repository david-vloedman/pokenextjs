import ListItem from './ListItem'
import Styles from '../../styles/PokemonList.module.css'

const testLi = {
	name: 'pikachu',
	sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
	type: 'electric',
	habitat: 'forest'
}

export default function _ListView({ props }) {
  return (
    <ul className={Styles.pokemon_list}>
      <ListItem props={testLi} />
      <ListItem props={testLi} />
    </ul>
  )
}
