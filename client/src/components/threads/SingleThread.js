import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const SingleThread = ({ thread: {title, slug, content, like, active, user } }) => {
	const {
		authState: {isAuthenticated }
	} = useContext(AuthContext)

	return (		
		<div className="container">
			<div className="row">
				<div className="col-md-8 mt-3 left">
					<div className="card mb-4">
						{ isAuthenticated ? (
						<div className="card-body">
							<h2 className="card-title">{title}</h2>
							<p className="card-text text-muted h6">{content} 
								<a href="{% url 'blog:update' post.slug %}" className="btn btn-warning">Edit</a>
								<a href="{% url 'blog:delete' post.slug %}" className="btn btn-danger">Delete</a>
							</p>						
							<a href="{% url 'blog:post_detail' post.slug  %}" className="btn btn-primary">Read More &rarr;</a>
						</div>
						) : ( 
						<>
							<h2 className="card-title">{title}</h2>
							<p className="card-text text-muted h6">{content}</p>
						</>)}
					</div>
						<nav aria-label="Page navigation conatiner">
							<ul className="pagination justify-content-center">
								<li><a href="?page={{ page_obj.previous_page_number }}" className="page-link">&laquo; PREV </a></li>
							
								<li><a href="?page={{ post_list.next_page_number }}" className="page-link"> NEXT &raquo;</a></li>
							
							</ul>
						</nav> 
				</div>
			</div>
		</div>
	)
}

export default SingleThread