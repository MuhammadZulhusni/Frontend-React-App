// Import React and Bootstrap components
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

// AllCourses component to display a list of course cards
class AllCourses extends Component {
     render() {
          return (
               // Fragment wraps everything without adding extra DOM elements
               <Fragment>
                    {/* Container for course section with centered text */}
                    <Container className="text-center">

                         {/* Section Title */}
                         <h1 className="serviceMainTitle">MY COURSES</h1>
                         <div className="bottom"></div>

                         {/* Row to divide content into two columns */}
                         <Row>

                              {/* Left Column - Contains 3 course items */}
                              <Col lg={6} md={12} sm={12}>
                                   <Row>
                                        {/* First Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>

                                        {/* Second Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>

                                        {/* Third Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>
                                   </Row>
                              </Col>

                              {/* Right Column - Contains 3 course items */}
                              <Col lg={6} md={12} sm={12}>
                                   <Row>
                                        {/* First Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>

                                        {/* Second Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>

                                        {/* Third Course */}
                                        <Col lg={6} md={6} sm={12} className="p-2">
                                             <img
                                                  className="courseImg"
                                                  src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                                                  alt="Course"
                                             />
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <h5 className="text-justify serviceName">Laravel 8</h5>
                                             <p className="text-justify serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of the card's content.
                                             </p>
                                             <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export the AllCourses component so it can be used in other pages
export default AllCourses
