import { useContext, useEffect } from 'react'
import { ThreadContext } from '../contexts/ThreadContext'
// import { AuthContext } from '../contexts/AuthContext'
// import AddThreadModal from '../components/threads/AddThreadModal'
import SingleThread from '../components/threads/SingleThread'
// import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'


const About = () => {
	// Contexts
	const {
		threadState: {threads, threadsLoading},
		getThreads
	} = useContext(ThreadContext)

	// Start: Get all threads
	useEffect(() => getThreads(), [])

	let body = null
	
	if (threadsLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} else if (threads.length === 0) {
		body = (
			<>
				No Thread, please add!
			</>
		)
	} else {
		body = (
			<>
				{ threads.map(thread => (
					<SingleThread thread={thread} />
				))}
				<nav aria-label="Page navigation conatiner">
					<ul className="pagination justify-content-center">
						<li><a href="?page={{ page_obj.previous_page_number }}" className="page-link">&laquo; PREV </a></li>							
						<li><a href="?page={{ post_list.next_page_number }}" className="page-link"> NEXT &raquo;</a></li>							
					</ul>
				</nav> 
			</>
		)
	}
	return (
		<>		
			{body}
		</>
	)
}

export default About