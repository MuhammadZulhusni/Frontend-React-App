// Import React and necessary modules
import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom' // React Router v6 components

// Import all the page components
import AboutPage from '../pages/AboutPage'
import AllCoursePage from '../pages/AllCoursePage'
import AllServicePage from '../pages/AllServicePage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import PortfolioPage from '../pages/PortfolioPage'
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';

// Define AppRouter class component
class AppRouter extends Component {
     render() {
          return (
               // Fragment wraps everything without adding extra DOM nodes
               <Fragment>

                    {/* Define all route paths using Routes (v6) */}
                    <Routes>

                         {/* Route for Home page */}
                         <Route path="/" element={<HomePage />} />

                         {/* Route for Services page */}
                         <Route path="/service" element={<AllServicePage />} />

                         {/* Route for Courses page */}
                         <Route path="/course" element={<AllCoursePage />} />

                         {/* Route for Portfolio page */}
                         <Route path="/porfolio" element={<PortfolioPage />} />

                         {/* Route for About page */}
                         <Route path="/about" element={<AboutPage />} />

                         {/* Route for Contact page */}
                         <Route path="/contact" element={<ContactPage />} />

                         {/* Route for Refund (Footer) */}
                         <Route path="/refund" element={<RefundPage />} />

                         {/* Route for Trems (Footer) */}
                         <Route path="/trems" element={<TremsPage />} />

                    </Routes>
               </Fragment>
          )
     }
}

export default AppRouter
