import {
	searchFormChange,
} from '../redux/slices/searchFormSlice'
import { getPokemonCardData, createSearchFormURL } from '../lib/request-helpers'

export default function useSearchForm({ useDispatch, useSelector }) {
	const form = useSelector((state) => state.form)

	const dispatch = useDispatch()

	const onChange = (e) => {
		const key = e.target.name
		const value = e.target.value
		dispatch(searchFormChange({ key, value }))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (form.form?.pokemonName) {
			const url = createSearchFormURL(form.form.pokemonName.toLowerCase())
			getPokemonCardData(url, dispatch)
		}
	}

	return { form, onChange, onSubmit }
}
