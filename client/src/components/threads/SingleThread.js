import { useContext } from 'react'
import ReadMore from './Readmore'
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
								<ReadMore content={content} />
								<a href="{% url 'blog:update' post.slug %}" className="btn btn-warning">Edit</a>
								<a href="{% url 'blog:delete' post.slug %}" className="btn btn-danger">Delete</a>									
							</div>
							) : ( 
							<>
								<h2 className="card-title">{title}</h2>
								<ReadMore content={content} />
							</>)
						}
					</div>						
				</div>
			</div>
		</div>
	)
}

export default SingleThread