import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient'; // API client
import AppUrl from '../../RestAPI/AppUrl';           // API endpoints
import Loading from '../Loading/Loading';           // Loading animation component

/**
 * AllCourses component: Fetches and displays a list of all courses.
 * Includes loading and basic error handling states.
 */
class AllCourses extends Component {
     constructor(){
          super();
          // Initialize component state for data, loading status, and error status.
          this.state = {
               myData: [],    // Stores fetched course data
               loading: true, // True while data is being fetched
               error: false   // True if an error occurs during fetch
          };
     }

     /**
      * Fetches course data from the API immediately after component mounts.
      */
     componentDidMount(){
          RestClient.GetRequest(AppUrl.CourseAll)
              .then(result => {
                  // Update state with fetched data, set loading to false, clear error.
                  this.setState({
                       myData: result,
                       loading: false,
                       error: false
                  });
              })
              .catch(error => {
                  // Log error, set loading to false, and set error state to true.
                  console.error("Error fetching courses:", error);
                  this.setState({
                      loading: false,
                      error: true
                  });
              });
     }

     render() {
          // Display loading animation while data is being fetched.
          if(this.state.loading === true){
              return <Loading />;
          }

          // Display error message if data fetching failed.
          if(this.state.error === true){
              return (
                  <Container className="text-center my-5">
                      <p className="text-danger lead">Failed to load courses. Please check your internet connection or try again later.</p>
                  </Container>
              );
          }

          // If data is loaded successfully, prepare course items for rendering.
          const courseList = this.state.myData;

          const courseViews = courseList.map(courseItem => {
             return  (
                 // Each course item is rendered in a responsive column.
                 <Col lg={6} md={12} sm={12} key={courseItem.id}>
                     <Row>
                         <Col lg={6} md={6} sm={12} className="p-2" >
                             {/* Course image with alt text for accessibility. */}
                             <img className="courseImg" src={courseItem.small_img} alt={courseItem.short_title} />
                         </Col>
                         <Col lg={6} md={6} sm={12}>
                             {/* Course title and brief description. */}
                             <h5 className="text-justify serviceName">{courseItem.short_title}</h5>
                             <p className="text-justify serviceDescription">{courseItem.short_description}</p>
                             {/* Link to the detailed course page, with a URL-friendly title. */}
                             <Link
                                 className="courseViewMore float-left"
                                 to={`/coursedetails/${courseItem.id}/${encodeURIComponent(courseItem.short_title.replace(/\s+/g, '-').toLowerCase())}`}
                             >
                                 View Details
                             </Link>
                         </Col>
                     </Row>
                 </Col>
             );
          });

          return (
               <Fragment>
                   <Container className="text-center">
                       <h1 className="serviceMainTitle">MY COURSES</h1>
                       <div className="bottom"></div> {/* Decorative separator */}
                       <Row>
                           {/* Render the list of course items. */}
                           {courseViews}
                       </Row>
                   </Container>
               </Fragment>
          );
     }
}

export default AllCourses;