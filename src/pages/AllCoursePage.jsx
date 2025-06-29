// Import React and necessary components
import React, { Component, Fragment } from 'react'

// Import custom components used on the All Courses page
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

// AllCoursePage component displays the full "All Courses" page
class AllCoursePage extends Component {

     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
               // Fragment wraps everything without adding extra DOM elements
               <Fragment>
                    {/* Top navigation bar */}
                    <TopNavigation title="All Courses" /> 

                    {/* Page top section with title "All Courses" */}
                    <PageTop pagetitle="All Courses" />

                    {/* Courses listing section */}
                    <AllCourses />

                    {/* Footer section */}
                    <Footer />
               </Fragment>
          )
     }
}

// Export the component so it can be used in routing or other parts of the app
export default AllCoursePage
