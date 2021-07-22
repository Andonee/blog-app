import React, { useEffect } from 'react'
import styles from './App.module.scss'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import Posts from './components/Pages/Posts/Posts'
import Contact from './components/Pages/Contact/Contact'
import Post from './components/Pages/Post/Post'
import NotFound from './components/Pages/NotFound/NotFound'
import ScrollToTop from './components/utils/ScrollToTop'
import { connect } from 'react-redux'
import { fetchPosts } from './store/posts/postsActions'
import Favourites from './components/Pages/Favourites/Favourites'

const App = ({ fetchPosts }) => {
	useEffect(() => {
		fetchPosts()
	}, [])
	return (
		<Router>
			<ScrollToTop />
			<div className={styles.app} data-test='component-app'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path='/favourites' component={Favourites} />
					<Route exact path='/contact' component={Contact} />
					<Route path={`/articles/:id`} component={Post} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
