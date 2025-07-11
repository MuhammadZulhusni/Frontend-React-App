import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class ContactSec extends Component {
    constructor() {
        super();
        this.state = {
            address: "...",
            email: "...",
            phone: "...",
            messageSuccess: "",   // Success message state
            messageError: "",     // Error message state
            loading:true 
        };
    }

    componentDidMount() {
        // Fetch contact data from API and update state
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                loading:false 
            });
        });
    }

    sendContact = () => {
        // Get input values from form fields
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Basic validation to check empty fields
        if (!name || !email || !message) {
            this.setState({ messageError: "Please fill in all fields.", messageSuccess: "" });
            return;
        }

        // Prepare data to send
        let jsonObject = { name, email, message };

        // Send POST request to API
        RestClient.PostRequest(AppUrl.ContactSend, jsonObject).then(result => {
            if (result) {
                // Success: show success message and clear form
                this.setState({
                    messageSuccess: "Message sent successfully.",
                    messageError: ""
                });
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            } else {
                // Failure: show error message
                this.setState({
                    messageError: "Failed to send message.",
                    messageSuccess: ""
                });
            }
        }).catch(error => {
            // Request error
            this.setState({
                messageError: "An error occurred. Please try again.",
                messageSuccess: ""
            });
        });
    }

    render() {

          if(this.state.loading == true){
               return <Loading />
          }
          else{ 


            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Quick Connect</h1>

                                {/* Show success or error messages */}
                                {this.state.messageSuccess && (
                                    <Alert variant="success">{this.state.messageSuccess}</Alert>
                                )}
                                {this.state.messageError && (
                                    <Alert variant="danger">{this.state.messageError}</Alert>
                                )}

                                {/* Contact Form */}
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control id="email" type="email" placeholder="Enter Your Email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control id="message" as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button onClick={this.sendContact} variant="primary">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>

                            {/* Contact Information */}
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Discuss Now</h1>

                                <p className="serviceDescription">
                                    {this.state.address}<br />
                                    <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}<br />
                                    <FontAwesomeIcon icon={faPhone} /> Phone: {this.state.phone}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default ContactSec;
