import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const searchFormReducer = {
	searchFormChange(state, action) {
		return {
			...state,
			form: {
				...state.form,
				hasError: false,
				[action.payload.key]: action.payload.value,
			},
		}
	},
	searchFormSubmit(state, action) {
		return {
      ...state,
		}
	},
	searchFormError(state, action){
		return {
			...state, 
			form: {
				hasError: true
			}			
		}
	}
}

const searchFormSlice = createSlice({
	name: 'searchForm',
	initialState: {},
	reducers: searchFormReducer,
})

const requestReducer = {
	requestSuccess(state, action) {
		return {
			...state,
			request: {
				isPending: false,
				data: {...action.payload},
			},
		}
	},
	requestPending(state, action) {
		return {
			...state,
			request: {
				isPending: true
			},
		}
	},
	requestFail(state, action) {
		return {
			...state,
			request: {
				hasError: true,
				err: action.payload
			},
		}
  },
  requestNoResults(state, action){
    return {
      ...state,
      request: {
				isPending: false,
        noResults: true
      }
    }
  }
}

const requestSlice = createSlice({
	name: 'request',
  initialState: { },
  reducers: requestReducer
})

export const { searchFormChange, searchFormSubmit, searchFormError } = searchFormSlice.actions

export const {requestFail, requestPending, requestSuccess, requestNoResults} = requestSlice.actions

const reducers = {
	form:searchFormSlice.reducer,
	request:requestSlice.reducer
}

export default combineReducers(reducers)
