import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'; // Client for making API requests
import AppUrl from '../../RestAPI/AppUrl';           // API endpoint definitions

// AllCourses component displays a comprehensive list of all available courses.
// It fetches course data from an API and renders each course as a clickable item.
class AllCourses extends Component {
     constructor(){
          super();
          // Initialize component state to store the fetched course data.
          this.state={
               myData:[]
          }
     }

     // Lifecycle method: Called immediately after the component is mounted to the DOM.
     // This is the standard place to perform data fetching.
     componentDidMount(){
          // Make a GET request to the 'CourseAll' API endpoint to retrieve all courses.
          RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
               // Update the component's state with the data received from the API.
               this.setState({myData:result});
          })
     }

     render() {
          // Destructure 'myData' from the component's state for easier access in rendering.
          const MyList = this.state.myData;

          // Map over the 'MyList' array to transform each course data object into a React component.
          // This creates a list of course views for rendering.
          const MyView = MyList.map(courseItem => { // Renamed MyList parameter to courseItem for clarity.
             return  (
                 // Each course is rendered within a Bootstrap Col component, providing responsive layout.
                 // The 'key' prop is essential for React to efficiently identify and re-render list items.
                 <Col lg={6} md={12} sm={12} key={courseItem.id}> {/* Unique key for list item rendering */}
                     <Row>
                         {/* Column dedicated to displaying the course image. */}
                         <Col lg={6} md={6} sm={12} className="p-2" >
                             {/* Displays the course's small image. 'alt' attribute is crucial for accessibility. */}
                             <img className="courseImg" src={courseItem.small_img} alt={courseItem.short_title} />
                         </Col>
                         {/* Column for course details: title, description, and a link to its full page. */}
                         <Col lg={6} md={6} sm={12}>
                             {/* Displays the course's short title. */}
                             <h5 className="text-justify serviceName">{courseItem.short_title}</h5>
                             {/* Displays a brief description of the course. */}
                             <p className="text-justify serviceDescription">{courseItem.short_description}</p>
                             {/* Link to the detailed course page.
                                 The 'to' prop constructs the URL with the course ID and a URL-friendly version of the title.
                                 'encodeURIComponent' ensures special characters in the title are properly handled in the URL.
                                 'replace(/\s+/g, '-').toLowerCase()' converts spaces to hyphens and makes the title lowercase for a cleaner URL. */}
                             <Link
                                 className="courseViewMore float-left"
                                 to={`/coursedetails/${courseItem.id}/${encodeURIComponent(courseItem.short_title.replace(/\s+/g, '-').toLowerCase())}`}
                             >
                                 View Details
                             </Link>
                         </Col>
                     </Row>
                 </Col>
             )
          })

          return (
               <Fragment>
                   {/* Main container for the "MY COURSES" section, centered. */}
                   <Container className="text-center">
                       <h1 className="serviceMainTitle">MY COURSES</h1>
                       <div className="bottom"></div> {/* A simple div for decorative underline/separator. */}
                       {/* Renders the dynamic list of course views generated above. */}
                       <Row>
                           {MyView}
                       </Row>
                   </Container>
               </Fragment>
          )
     }
}

export default AllCourses; // Exports the AllCourses component for use throughout the application.