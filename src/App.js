import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import SearchResult from './views/SearchResult';
import GameProfile from './views/GameProfile';
import UserProfile from './views/UserProfile';
import Footer from './components/layout/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
	return (
		<Router>
            <ScrollToTop>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search-results" component={SearchResult} />
                        <Route exact path="/game-profile" component={GameProfile} />
                        <Route exact path="/user-profile" component={UserProfile} />
                    </Switch>
                    <Footer />
                    <CssBaseline />
                </div>
            </ScrollToTop>
		</Router>
	);
}

export default App;
