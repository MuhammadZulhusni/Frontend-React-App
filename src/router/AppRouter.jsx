import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importing page components
import AboutPage from '../pages/AboutPage'
import AllCoursePage from '../pages/AllCoursePage'
import AllServicePage from '../pages/AllServicePage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import PortfolioPage from '../pages/PortfolioPage'
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage'
import CourseDetailsPage from '../pages/CourseDetailsPage'

// AppRouter component defines the application's routing
class AppRouter extends Component {
     render() {
          return (
               <Fragment>
                    {/* Routes component from react-router-dom to define application routes */}
                    <Routes>
                         {/* Define individual routes and their corresponding components */}
                         <Route path="/" element={<HomePage />} />
                         <Route path="/service" element={<AllServicePage />} />
                         <Route path="/course" element={<AllCoursePage />} />
                         <Route path="/porfolio" element={<PortfolioPage />} />
                         <Route path="/about" element={<AboutPage />} />
                         <Route path="/contact" element={<ContactPage />} />
                         <Route path="/refund" element={<RefundPage />} />
                         <Route path="/trems" element={<TremsPage />} />
                         <Route path="/privacy" element={<PrivacyPage />} />

                         {/* Route with URL parameters for project details */}
                         <Route path="/projectdetails/:projectID/:projectName" element={<ProjectDetailPage />} />

                         {/* Route with URL parameters for course details */}
                         <Route path="/coursedetails/:courseID/:courseName" element={<CourseDetailsPage />} />

                    </Routes>
               </Fragment>
          )
     }
}

export default AppRouter