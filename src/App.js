import React from 'react'
import styles from './App.module.scss'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import Posts from './components/Pages/Posts/Posts'
import Contact from './components/Pages/Contact/Contact'
import Post from './components/Pages/Post/Post'
import NotFound from './components/Pages/NotFound/NotFound'

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path='/contact' component={Contact} />
					<Route path={`/articles/:id`} component={Post} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
