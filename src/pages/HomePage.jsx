// Import React and necessary components
import React, { Component, Fragment } from 'react'

// Import all custom components used on the homepage
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';

// HomePage component
class HomePage extends Component {

     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
             // Fragment is used to group multiple components without adding extra DOM elements
             <Fragment>

               {/* Top navigation bar */}
               <TopNavigation title="Easy Learning Page" /> 

               {/* Top banner section */}
               <TopBanner />

               {/* Welcome Section */}
               <Welcome /> 

               {/* Services section */}
               <Services />

               {/* Analysis section */}
               <Analysis />

               {/* Summary section */}
               <Summary />

               {/* Recent projects showcase */}
               <RecentProject />

               {/* Courses section */}
               <Courses />

               {/* Video presentation section */}
               <Video />

               {/* Client review/testimonials */}
               <ClientReview />

               {/* About Me section */}
               <AboutMe />

               {/* Footer section */}
               <Footer />

             </Fragment>
          )
     }
}

// Export the component so it can be used in other files
export default HomePage
