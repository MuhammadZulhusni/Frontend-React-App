// Import React and required components
import React, { Component, Fragment } from 'react'

// Import custom components used on the About Us page
// ../ = go up one folder
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

// AboutPage component displays the full About Us page
class AboutPage extends Component {
     render() {
          return (
               // Fragment wraps all elements without adding extra tags to the DOM
               <Fragment>
                    {/* Top navigation bar */}
                    <TopNavigation />

                    {/* Top section with "About Us" title */}
                    <PageTop pagetitle="About Us" />

                    {/* About Me section with profile and intro */}
                    <AboutMe />

                    {/* Detailed description section: Who I Am, Mission, Vision */}
                    <AboutDescription />

                    {/* Footer section at the bottom */}
                    <Footer />
               </Fragment>
          )
     }
}

// Export the AboutPage component so it can be used in routes or other components
export default AboutPage
