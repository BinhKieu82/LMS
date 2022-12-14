import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import NavbarUserMenu from '../layout/NavbarUserMenu'
import Header from '../layout/Header'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)

	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<>
						<NavbarUserMenu />
						<Component {...rest} {...props} />
					</>
				) : (
					<>
						<Header />
						<Redirect to='/login' />
					</>
				)
			}
		/>
	)
}

export default ProtectedRoute
