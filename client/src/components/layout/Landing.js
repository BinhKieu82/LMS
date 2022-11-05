import Header from './Header'
import NavbarUserMenu from './NavbarUserMenu'
import About from '../../views/About'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Landing = () => {
  const {
		authState: {isAuthenticated }
	} = useContext(AuthContext)

	return (
    <>
      { isAuthenticated ? (<NavbarUserMenu />) : (<Header />) }    
      <header class="masthead" id="ssm">
        <div class="overlay"></div>
        <div class="container" id="banner-header">
          <div class="row">
            <div class=" col-md-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h2 class=" site-heading my-4 mt-3 text-white"> Welcome to Bruce Kieu Blog </h2>
                <p class="text-light">Let's learn together..! &nbsp</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <About />
    </>   
	)
}

export default Landing
