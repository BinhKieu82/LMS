import {
	THREADS_LOADED_SUCCESS,
	THREADS_LOADED_FAIL,
	ADD_THREAD,
	DELETE_THREAD,
	UPDATE_THREAD,
	FIND_THREAD
} from '../contexts/constants'

export const threadReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case THREADS_LOADED_SUCCESS:
			return {
				...state,
				threads: payload,
				threadsLoading: false
			}

		case THREADS_LOADED_FAIL:
			return {
				...state,
				threads: [],
				threadsLoading: false
			}

		case ADD_THREAD:
			return {
				...state,
				threads: [...state.threads, payload]
			}

		case DELETE_THREAD:
			return {
				...state,
				threads: state.threads.filter(thread => thread._id !== payload)
			}

		case FIND_THREAD:
			return { ...state, thread: payload }

		case UPDATE_THREAD:
			const newPosts = state.threads.map(thread =>
				thread._id === payload._id ? payload : thread
			)

			return {
				...state,
				threads: newPosts
			}

		default:
			return state
	}
}
