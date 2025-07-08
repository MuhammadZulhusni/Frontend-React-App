// Import necessary libraries and components
import React, { Component, Fragment } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class ContactSec extends Component {
     constructor() {
          super();
          // Initialize default state
          this.state = { 
               address: "...",
               email: "...",
               phone: "..." 
          };
     }

     // Fetch contact data from API after component mounts
     componentDidMount() {          
          RestClient.GetRequest(AppUrl.FooterData).then(result => {
               this.setState({
                    address: result[0]['address'],
                    email: result[0]['email'],
                    phone: result[0]['phone']
               });
          });
     }

     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              {/* Left column - Contact Form */}
                              <Col lg={6} md={6} sm={12}>
                                   <h1 className="serviceName">Quick Connect</h1>

                                   <Form>
                                        <Form.Group>
                                             <Form.Label>Your Name</Form.Label>
                                             <Form.Control type="text" placeholder="Enter Your Name" /> 
                                        </Form.Group>

                                        <Form.Group>
                                             <Form.Label>Your Email</Form.Label>
                                             <Form.Control type="email" placeholder="Enter Your Email" /> 
                                        </Form.Group>

                                        <Form.Group>
                                             <Form.Label>Message</Form.Label>
                                             <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                             Submit
                                        </Button>
                                   </Form>
                              </Col>

                              {/* Right column - Contact Details */}
                              <Col lg={6} md={6} sm={12}>
                                   <h1 className="serviceName">Discuss Now</h1>
                                   <p className="serviceDescription">
                                        {this.state.address}<br />
                                        <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}<br />
                                        <FontAwesomeIcon icon={faPhone} /> Phone: {this.state.phone}<br />
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          );
     }
}

export default ContactSec;
