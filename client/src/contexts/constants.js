export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000/api'
		: 'https://sleepy-inlet-56101.herokuapp.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'Binhkn-blog'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'

export const THREADS_LOADED_SUCCESS = 'THREADS_LOADED_SUCCESS'
export const THREADS_LOADED_FAIL = 'THREADS_LOADED_FAIL'
export const ADD_THREAD = 'ADD_THREAD'
export const DELETE_THREAD = 'DELETE_THREAD'
export const UPDATE_THREAD = 'UPDATE_THREAD'
export const FIND_THREAD = 'FIND_THREAD'
