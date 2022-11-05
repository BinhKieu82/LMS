import { createContext, useReducer, useState } from 'react'
import { threadReducer } from '../reducers/threadReducer'
import {
	apiUrl,
	THREADS_LOADED_FAIL,
	THREADS_LOADED_SUCCESS,
	ADD_THREAD,
	DELETE_THREAD,
	UPDATE_THREAD,
	FIND_THREAD
} from './constants'
import axios from 'axios'

export const ThreadContext = createContext()

const ThreadContextProvider = ({ children }) => {
	// State
	const [threadState, dispatch] = useReducer(threadReducer, {
		thread: null,
		threads: [],
		threadsLoading: true
	})

	const [showAddThreadModal, setShowAddThreadModal] = useState(false)
	const [showUpdateThreadModal, setShowUpdateThreadModal] = useState(false)
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})

	// Get all threads
	const getThreads = async () => {
		try {
			const response = await axios.get(`${apiUrl}/threads`)
			console.log(response.data)
			if (response.data.success) {				
				dispatch({ type: THREADS_LOADED_SUCCESS, payload: response.data.threads })
			}
		} catch (error) {
			dispatch({ type: THREADS_LOADED_FAIL })
		}
	}

	// Add thread
	const addThread = async newThread => {
		try {
			const response = await axios.thread(`${apiUrl}/threads`, newThread)
			console.log(response.data.module)
			if (response.data.success) {
				dispatch({ type: ADD_THREAD, payload: response.data.module })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Delete thread
	const deleteThread = async threadId => {
		try {
			const response = await axios.delete(`${apiUrl}/threads/${threadId}`)
			if (response.data.success)
				dispatch({ type: DELETE_THREAD, payload: threadId })
		} catch (error) {
			console.log(error)
		}
	}

	// Find thread when user is updating thread
	const findThread = threadId => {
		const thread = threadState.threads.find(thread => thread._id === threadId)
		dispatch({ type: FIND_THREAD, payload: thread })
	}

	// Update thread
	const updateThread = async updatedThread => {
		try {
			const response = await axios.put(
				`${apiUrl}/threads/${updatedThread._id}`,
				updatedThread
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_THREAD, payload: response.data.module })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Thread context data
	const threadContextData = {
		threadState,
		getThreads,
		showAddThreadModal,
		setShowAddThreadModal,
		showUpdateThreadModal,
		setShowUpdateThreadModal,
		addThread,
		showToast,
		setShowToast,
		deleteThread,
		findThread,
		updateThread
	}

	return (
		<ThreadContext.Provider value={threadContextData}>
			{children}
		</ThreadContext.Provider>
	)
}

export default ThreadContextProvider
