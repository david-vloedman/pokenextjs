import { createStore, applyMiddleware } from 'redux'
import { useMemo } from 'react'
import thunk from 'redux-thunk'
import requestReducer from './reducers/requestReducer'
import { useSelector, useDispatch } from "react-redux";

const initialState = {
	error: undefined,
	isPending: false,
  data: undefined,
}

function initStore() {
	return createStore(requestReducer, applyMiddleware(thunk))
}

export function useStore(initialState) {
	const store = useMemo(() => initStore(initialState), [initialState])
	return store
}


export const useRequest = () => {

}