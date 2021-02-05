import * as ActionCreators from '../action-creators'

export default function requestReducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case ActionCreators.REQUEST_PENDING:
			return {
				...state,
				isPending: true,
				error: undefined,
			}

		case ActionCreators.REQUEST_SUCCESS:
			return {
				...state,
				data:{...payload},
				isPending: false,
			}

		case ActionCreators.REQUEST_FAIL:
			return {
				...state,
				isPending: false,
				...payload,
			}

		default:
			return {
				...state,
			}
	}
}
