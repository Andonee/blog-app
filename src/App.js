import React from 'react'
import styles from './App.module.scss'
import { Route, Switch, HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/UI/Footer/Footer'
import Home from './components/Pages/Home/Home'
import Posts from './components/Pages/Posts/Posts'
import Contact from './components/Pages/Contact/Contact'
import Post from './components/Pages/Post/Post'

const App = () => {
	return (
		<HashRouter>
			<div className={styles.app}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path='/contact' component={Contact} />
					<Route path={`/articles/:id`}>
						<Post />
					</Route>

					{/* TODO
					ADD 404 page */}
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	)
}

export default App
