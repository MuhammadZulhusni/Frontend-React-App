import React, { Component, Fragment } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';
import '../../asset/css/contact.css';

class ContactSec extends Component {
    constructor() {
        super();
        this.state = {
            address: "...",
            email: "...",
            phone: "...",
            messageSuccess: "",
            messageError: "",
            loading: true
        };
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                loading: false
            });
        });
    }

    sendContact = (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !message) {
            this.setState({ messageError: "Please fill in all fields.", messageSuccess: "" });
            return;
        }

        let jsonObject = { name, email, message };

        RestClient.PostRequest(AppUrl.ContactSend, jsonObject).then(result => {
            if (result) {
                this.setState({
                    messageSuccess: "Message sent successfully! We'll get back to you soon.",
                    messageError: ""
                });
                document.getElementById("contactForm").reset();
            } else {
                this.setState({
                    messageError: "Failed to send message. Please try again.",
                    messageSuccess: ""
                });
            }
        }).catch(error => {
            this.setState({
                messageError: "An error occurred. Please try again.",
                messageSuccess: ""
            });
        });
    }

    render() {
        if (this.state.loading === true) {
            return <Loading />;
        } else {
            return (
                <Fragment>
                    <Container className="contact-section">
                        <Row className="align-items-center">
                            <Col lg={6} md={6} sm={12} className="contact-form-col">
                                <Fade direction="up" triggerOnce>
                                    <div className="section-header">
                                        <h2 className="section-title">Get In Touch</h2>
                                        <p className="section-subtitle">We'd love to hear from you</p>
                                    </div>
                                </Fade>

                                {this.state.messageSuccess && (
                                    <Alert variant="success" className="alert-message">
                                        {this.state.messageSuccess}
                                    </Alert>
                                )}
                                {this.state.messageError && (
                                    <Alert variant="danger" className="alert-message">
                                        {this.state.messageError}
                                    </Alert>
                                )}

                                <Form id="contactForm" className="contact-form">
                                    <Form.Group className="form-group">
                                        <Form.Control 
                                            id="name" 
                                            type="text" 
                                            placeholder="Your Name" 
                                            className="form-input"
                                        />
                                    </Form.Group>

                                    <Form.Group className="form-group">
                                        <Form.Control 
                                            id="email" 
                                            type="email" 
                                            placeholder="Your Email" 
                                            className="form-input"
                                        />
                                    </Form.Group>

                                    <Form.Group className="form-group">
                                        <Form.Control 
                                            id="message" 
                                            as="textarea" 
                                            rows={5} 
                                            placeholder="Your Message"
                                            className="form-input"
                                        />
                                    </Form.Group>

                                    <Button 
                                        onClick={this.sendContact} 
                                        variant="primary" 
                                        className="submit-btn"
                                    >
                                        Send Message
                                    </Button>
                                </Form>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="contact-info-col">
                                <Fade direction="up" delay={150} triggerOnce>
                                    <div className="contact-info">
                                        <h2 className="info-title">Contact Information</h2>
                                        <p className="info-description">
                                            Feel free to reach out through any of these channels
                                        </p>
                                        
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            </div>
                                            <div className="info-content">
                                                <h3>Address</h3>
                                                <p>{this.state.address}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="info-content">
                                                <h3>Email</h3>
                                                <p>{this.state.email}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <div className="info-content">
                                                <h3>Phone</h3>
                                                <p>{this.state.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default ContactSec;
