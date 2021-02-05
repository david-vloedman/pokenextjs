import requestReducer from '../reducers/requestReducer'
import * as actions from '../action-creators'
import {useReducer, useEffect} from 'react'

const createInitialState = (state) => ({
	error: undefined,
	isPending: false,
	data: undefined,
	...state,
})
/**
 * A hook for making requests
 * @param {string} endpoint 
 * @param {object} initialState 
 * @param {object} config 
 */
export default function useRequest(endpoint, initialState = {}, config = {}) {
  console.log(endpoint)
	const [state, dispatch] = useReducer(
		requestReducer,
		createInitialState(initialState)
	)
    
	useEffect(async () => {
		if (!endpoint) throw new Error('An endpoint must be provided')

		const requestData = async () => {
			dispatch(actions.requestPending(true))
    

		try {
			const response = await fetch(endpoint)
      
			if (!response.ok)
				return dispatch(actions.requestFail(response.statusText))

			const data = await response.json()
			dispatch(actions.requestSuccess(data))
		} catch (err) {
			dispatch(actions.requestFail(err))
		}
  }
    requestData();
  }, [])
  return state;
}
