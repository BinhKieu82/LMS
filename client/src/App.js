import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute'
import Roadmap from './views/Roadmap'
import CV from './views/CV'
import PostContextProvider from './contexts/PostContext'
import ThreadContextProvider from './contexts/ThreadContext'

function App() {
	return (
		<AuthContextProvider>
			<ThreadContextProvider>
			<PostContextProvider>
				<Router>					
					<Switch>						
						<Route exact path='/' component={Landing} />
						<Route exact path='/about' component={CV} />
						<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
						<Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
						{/* <ProtectedRoute exact path='/login' component={About} /> */}
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/dashboard/roadmap' component={Roadmap} />
					</Switch>
				</Router>
			</PostContextProvider>
			</ThreadContextProvider>
		</AuthContextProvider>
	)
}

export default App
