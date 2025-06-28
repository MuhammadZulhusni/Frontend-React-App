// Import React and required modules
import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

// Import icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

// ContactSec component displays a contact form and contact info
class ContactSec extends Component {
     render() {
          return (
               // Fragment prevents unnecessary DOM wrapper
               <Fragment>
                    {/* Bootstrap container with margin-top */}
                    <Container className="mt-5">
                         <Row>
                              {/* Left column: Contact form */}
                              <Col lg={6} md={6} sm={12}>
                                   <h1 className="serviceName">Quick Connect</h1>

                                   {/* Contact form */}
                                   <Form>
                                        {/* Name input */}
                                        <Form.Group>
                                             <Form.Label>Your Name</Form.Label>
                                             <Form.Control type="text" placeholder="Enter Your Name" />
                                        </Form.Group>

                                        {/* Email input */}
                                        <Form.Group>
                                             <Form.Label>Your Email</Form.Label>
                                             <Form.Control type="email" placeholder="Enter Your Email" />
                                        </Form.Group>

                                        {/* Message textarea */}
                                        <Form.Group>
                                             <Form.Label>Message</Form.Label>
                                             <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        {/* Submit button */}
                                        <Button variant="primary" type="submit">
                                             Submit
                                        </Button>
                                   </Form>
                              </Col>

                              {/* Right column: Contact info */}
                              <Col lg={6} md={6} sm={12}>
                                   <h1 className="serviceName">Discuss Now</h1>

                                   {/* Address and contact details with icons */}
                                   <p className="serviceDescription">
                                        6522 Baltimore National Pike<br />
                                        CatonsVille, California, USA<br /><br />
                                        <FontAwesomeIcon icon={faEnvelope} /> Email: Support@ele.com<br />
                                        <FontAwesomeIcon icon={faPhone} /> Phone: 434-343-434
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export the component for use in other parts of the app
export default ContactSec
