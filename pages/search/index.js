import SearchForm from '../../components/forms/SearchForm'
import { useSelector } from 'react-redux'
import PokemonCard from '../../containers/Pokemon-card'
import Col from 'react-bootstrap/Col'


export default function Index() {

	const request = useSelector(state => state.request.request)


	return (
		<Col>
		<div className='nes-container with-title text-right m-auto'>
			<p className={'title'}>Search!</p>
			<SearchForm />
			
			<div className="text-center nes-container with-title">
				<p className="title">Results</p>
				{request?.isPending ? "Loading..." : null}
				{request?.data ? <PokemonCard pokemon={request.data} /> : null}
				{request?.noResults ? "Not found" : null}
				{request?.hasError ? "Error" : null}
			</div>
		</div>
		</Col>
		
	)
}
