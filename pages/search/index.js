import SearchForm from '../../components/forms/SearchForm'
import { useSelector } from 'react-redux'
import PokemonCard from '../../containers/Pokemon-card'
import ListItem from '../../components/pokemon/ListItem'
import Col from 'react-bootstrap/Col'
import next from 'next'

const testLi = {
	name: 'pikachu',
	sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
	type: 'electric',
	habitat: 'forest'
}


export default function Index(props) {
	const request = useSelector((state) => state.request.request)
	console.log(props)


	return (
		<>
			<div className='nes-container with-title text-right m-auto'>
				<p className={'title'}>Search!</p>
				<SearchForm />
			</div>
			<div className='nes-container with-title mt-2'>
				<p className='title'>Results!</p>
				{request?.isPending ? 'Loading...' : null}
				{request?.data ? <PokemonCard pokemon={request.data} /> : null}
				{request?.noResults ? 'Not found' : null}
				{request?.hasError ? 'Error' : null}
				{/* <ListItem props={testLi} /> */}
			</div>
			
		</>
	)
}
