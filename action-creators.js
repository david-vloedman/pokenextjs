/* Action Creators */
export function requestSuccess(data) {
  
	return {
		type: REQUEST_SUCCESS,
		payload: {...data},
	}
}

export function requestPending(bool) {
	return {
		type: REQUEST_PENDING,
		resultsPending: bool,
	}
}

export function requestFail(err) {
	return {
		type: REQUEST_FAIL,
		payload: err,
	}
}

export function noResults() {
	return {
		type: NO_RESULTS,
	}
}

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAIL = 'REQUEST_FAIL'
export const REQUEST_PENDING = 'REQUEST_PENDING'
export const NO_RESULTS = 'NO_RESULTS'
