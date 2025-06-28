// Import React and necessary routing components
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import all required page components
import AllCourses from '../components/AllCourses/AllCourses';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';

// AppRouter component to manage routes for the application
class AppRouter extends Component {
     render() {
          return (
               // Fragment to wrap routing structure without adding extra DOM elements
               <Fragment>
                    {/* Switch renders the first matching route only */}
                    <Switch>
                         {/* Route for homepage */}
                         <Route exact path="/" component={HomePage} />
                         
                         {/* Route for services page */}
                         <Route exact path="/service" component={AllServicePage} />
                         
                         {/* Route for courses page */}
                         <Route exact path="/course" component={AllCourses} />
                         
                         {/* Route for portfolio/projects page */}
                         <Route exact path="/porfolio" component={PortfolioPage} />
                         
                         {/* Route for about page */}
                         <Route exact path="/about" component={AboutPage} />
                         
                         {/* Route for contact page */}
                         <Route exact path="/contact" component={ContactPage} /> 
                    </Switch>
               </Fragment>
          )
     }
}

// Export the router component for use in main App.js
export default AppRouter
