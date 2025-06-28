// Import React and Bootstrap components
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// AboutDescription component displays the About page content
class AboutDescription extends Component {
     render() {
          return (
               // Use Fragment to wrap the entire layout without adding extra DOM elements
               <Fragment>
                    {/* Container with margin top */}
                    <Container className="mt-5">
                         <Row>
                              <Col sm={12} lg={12} md={12}>
                                   {/* Section: Who I Am */}
                                   <h1 className="serviceName">Who I Am</h1>
                                   <hr />
                                   <p className="serviceDescription">
                                        Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching.
                                        I am the founder of eLe Easy Learning and a passionate Web Developer, Programmer & Instructor.
                                        <br /><br />
                                        I have been working online for the last 7 years and have created several successful websites.
                                        I try to create project-based courses that help you learn professionally and feel like a complete developer.
                                        Easy Learning exists to help you succeed in life.
                                        <br /><br />
                                        Each course is tailored to teach a specific skill. Whether you're learning something new or refreshing old knowledge, you're in the right place.
                                        <br /><br />
                                        Education makes the world better. Make your world better with new skills.
                                   </p>

                                   <br /><br />

                                   {/* Section: Our Mission */}
                                   <h1 className="serviceName">Our Mission</h1>
                                   <hr />
                                   <p className="serviceDescription">
                                        Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching.
                                        I am the founder of eLe Easy Learning and a passionate Web Developer, Programmer & Instructor.
                                        <br /><br />
                                        I have been working online for the last 7 years and have created several successful websites.
                                        I try to create project-based courses that help you learn professionally and feel like a complete developer.
                                        Easy Learning exists to help you succeed in life.
                                        <br /><br />
                                        Each course is tailored to teach a specific skill. Whether you're learning something new or refreshing old knowledge, you're in the right place.
                                        <br /><br />
                                        Education makes the world better. Make your world better with new skills.
                                   </p>

                                   <br /><br />

                                   {/* Section: Our Vision */}
                                   <h1 className="serviceName">Our Vision</h1>
                                   <hr />
                                   <p className="serviceDescription">
                                        Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching.
                                        I am the founder of eLe Easy Learning and a passionate Web Developer, Programmer & Instructor.
                                        <br /><br />
                                        I have been working online for the last 7 years and have created several successful websites.
                                        I try to create project-based courses that help you learn professionally and feel like a complete developer.
                                        Easy Learning exists to help you succeed in life.
                                        <br /><br />
                                        Each course is tailored to teach a specific skill. Whether you're learning something new or refreshing old knowledge, you're in the right place.
                                        <br /><br />
                                        Education makes the world better. Make your world better with new skills.
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export the component for use in other parts of the app
export default AboutDescription
