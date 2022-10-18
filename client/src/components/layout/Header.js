import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const Header = () => {
	return (
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<Nav.Link
					className='font-weight-bolder text-white'
					to='/'
					as={Link}
				>
					Home
				</Nav.Link>
				<Nav.Link
					className='font-weight-bolder text-white'
					to='/about'
					as={Link}
				>
					About
				</Nav.Link>
			</Nav>

			<Nav>
				<Nav.Link to="/login" as={Link}>
          Login
        </Nav.Link>
				<Nav.Link to="/register" as={Link}>
          Register
        </Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}

export default Header
