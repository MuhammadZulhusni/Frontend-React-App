// Import React and necessary components
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

// AllProjects component to display a list of recent project cards
class AllProjects extends Component {
     render() {
          return (
               // Fragment allows grouping without adding extra DOM element
               <Fragment>
                    {/* Container for the entire section */}
                    <Container className="text-center">
                         {/* Section title */}
                         <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                         <div className="bottom"></div>

                         {/* Row to hold all project cards */}
                         <Row>

                              {/* First Project Card */}
                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name One</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              {/* Second Project Card */}
                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name Two</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              {/* Third Project Card */}
                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name Three</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              {/* Repeated Cards Below */}

                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name One</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name One</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col lg={4} md={6} sm={12}>
                                   <Card className="projectCard">
                                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
                                        <Card.Body>
                                             <Card.Title className="serviceName">Project Name One</Card.Title>
                                             <Card.Text className="serviceDescription">
                                                  Some quick example text to build on the card title and make up the bulk of
                                                  the card's content.
                                             </Card.Text>
                                             <Button variant="primary"><Link className="link-style"  to="/projectdetails"> View More </Link>  </Button>
                                        </Card.Body>
                                   </Card>
                              </Col>

                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export the component so it can be used elsewhere
export default AllProjects
