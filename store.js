import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducer'


const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose


export function initStore() {
	return createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
}
