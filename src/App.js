import React from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Posts from './components/Pages/Posts/Posts'
import Contact from './components/Pages/Contact/Contact'

const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path='/contact' component={Contact} />
					{/* TODO
					ADD 404 page */}
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
