import * as TYPES from '../actions/appActionTypes';

export default function app(state = {}, action) {
	switch (action.type) {
	case TYPES.AUTH_TOKEN:
		return {
			...state,
			token: action.value
		}
	case TYPES.LOADING:
		return {
			...state,
			loading: action.value
		}
	case TYPES.LOADING_ERROR:
		return {
			...state,
			loadingError: action.value
		}
	case TYPES.PROJECT:
		return {
			...state,
			project: action.value
		}
	case TYPES.PROJECTS:
		return {
			...state,
			projects: action.value
		}
	case TYPES.LANGUAGES:
		return {
			...state,
			languages: action.value
		}
	case TYPES.SEARCH_CODE:
		return {
			...state,
			codes: action.value
		}
	default:
		return state
	}
}
