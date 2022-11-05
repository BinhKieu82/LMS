import { useContext } from 'react'
import { ThreadContext } from '../contexts/ThreadContext'
import { AuthContext } from '../contexts/AuthContext'
// import { Redirect } from 'react-router-dom'
// import Spinner from 'react-bootstrap/Spinner'


const About = () =>{
	// const {
	// 	threadState: { thread, threads, threadsLoading },
	// 	getThreads,
	// 	setShowAddThreadModal,
	// 	showToast: { show, message, type },
	// 	setShowToast
	// } = useContext(ThreadContext)
	

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-8 mt-3 left">
					<div class="card mb-4">
						<div class="card-body">
							<h2 class="card-title">title</h2>
							<p class="card-text text-muted h6">content 
								<a href="{% url 'blog:update' post.slug %}" class="btn btn-warning">Edit</a>
								<a href="{% url 'blog:delete' post.slug %}" class="btn btn-danger">Delete</a>
							</p>
							<p class="card-text">content</p>
							<a href="{% url 'blog:post_detail' post.slug  %}" class="btn btn-primary">Read More &rarr;</a>
						</div>
					</div>
						<nav aria-label="Page navigation conatiner">
							<ul class="pagination justify-content-center">
								<li><a href="?page={{ page_obj.previous_page_number }}" class="page-link">&laquo; PREV </a></li>
							
								<li><a href="?page={{ post_list.next_page_number }}" class="page-link"> NEXT &raquo;</a></li>
							
							</ul>
						</nav> 
				</div>
			</div>
		</div>
	)
} 

export default About