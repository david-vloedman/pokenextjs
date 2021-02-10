import { createSlice } from '@reduxjs/toolkit'

const searchFormReducer = {
	searchFormChange(state, action) {
		return {
			...state,
			form: {
				...state.form,
				[action.payload.key]: action.payload.value,
			},
		}
	},
	searchFormSubmit(state, action) {
		return {
			...state,
		}
	},
}

const searchFormSlice = createSlice({
	name: 'searchForm',
	initialState: {},
	reducers: searchFormReducer,
})

console.log(searchFormSlice.reducer)
export const { searchFormChange, searchFormSubmit } = searchFormSlice.actions

export default searchFormSlice.reducer
