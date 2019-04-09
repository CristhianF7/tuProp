import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import SignUp from './components/signup';

export default class RouteApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        )
    }
}