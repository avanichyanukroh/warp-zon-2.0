import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import SearchResult from './views/SearchResult';
import GameProfile from './views/GameProfile';
import UserProfile from './views/UserProfile';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';


const App = () => {
	return (
		<Router>
			<div className="App">
				<CssBaseline />
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route exact path="/search-results" component={SearchResult} />
				<Route exact path="/game-profile" component={GameProfile} />
				<Route exact path="/user-profile" component={UserProfile} />
			</div>
		</Router>
	);
}

export default App;
