import SearchForm from '../../components/forms/SearchForm'
import { useSelector } from 'react-redux'
import PokemonCard from '../../containers/Pokemon-card'
import _ListView from '../../components/pokemon/_ListView'
import {getAllPokemonNames, getPokemonSprites} from '../../lib/request-helpers'
import SearchSuggestion from '../../components/SearchSuggestion'

const testLi = {
	name: 'pikachu',
	sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
	type: 'electric',
	habitat: 'forest'
}

const ShowIf = ({condition, children}) => {
	return condition ? <>{children}</> : null
}




export default function Index(props) {
	const request = useSelector((state) => state.request.request)
	const form = useSelector((state) => state.form)
	
	const potentialTerms = props.names.map(poke => poke.name)
	const searchedTerm = form?.form?.pokemonName

	return (
		<>
		{/* <_ListView /> */}
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
				<ShowIf condition={request?.noResults}>
					<SearchSuggestion potentialTerms={potentialTerms} searchedTerm={searchedTerm} />
					
				</ShowIf>
				
			</div>
			
		</>
	)
}

export async function getServerSideProps(context){
	
	try{
		const baseUrl = process.env.api.pokemon
		const res = await fetch(baseUrl)
		const data = await res.json()
	
		const limit = data.count
		const offset = 0
		
		const allPokeUrl = `${baseUrl}?offset=${offset}&limit=${limit}`
		const secondRes = await fetch(allPokeUrl)
		const secondData = await secondRes.json()
	
		const names = secondData.results;
		
		return {
			props: {
				names: names
			}
		}
	} catch(err){
		console.log(err)
	}

}