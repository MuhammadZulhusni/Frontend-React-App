import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"; 
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'; // Import the Loading component

/**
 * Footer component: Displays contact information, social media links,
 * and policy/info links. Fetches data from an API.
 */
class Footer extends Component {
     constructor() {
          super();
          // Initialize state with placeholders and loading flags.
          this.state = {
               address: "...",
               email: "...",
               phone: "...",
               facebook: "...",
               youtube: "...",
               twitter: "...",
               footer_credit: "...",
               loading: true, // True while data is being fetched
               error: false   // True if an error occurs during fetch
          };
     }

     /**
      * Fetches footer data from the API after the component mounts.
      */
     componentDidMount() {
          RestClient.GetRequest(AppUrl.FooterData)
               .then(result => {
                    // Update state with the API response, set loading to false, clear error.
                    this.setState({
                         address: result[0]['address'],
                         email: result[0]['email'],
                         phone: result[0]['phone'],
                         facebook: result[0]['facebook'],
                         youtube: result[0]['youtube'],
                         twitter: result[0]['twitter'],
                         footer_credit: result[0]['footer_credit'],
                         loading: false, // Data fetched, hide loader
                         error: false
                    });
               })
               .catch(error => {
                    // Log error, set loading to false, and set error state to true.
                    console.error("Error fetching footer data:", error);
                    this.setState({
                         loading: false, // Stop loading
                         error: true     // Indicate an error
                    });
               });
     }

     render() {
          // If currently loading, display the Loading component.
          if (this.state.loading === true) {
               return <Loading />;
          }

          // If an error occurred and not loading, display an error message.
          // You could customize this error display further for the footer.
          if (this.state.error === true) {
               return (
                    <Container fluid={true} className="footerSection text-center py-5">
                         <p className="text-danger lead">Failed to load footer content.</p>
                    </Container>
               );
          }

          // If not loading and no error, render the footer content.
          return (
               <Fragment>
                    {/* Main footer container */}
                    <Container fluid={true} className="footerSection">
                         <Row>
                              {/* Social Media Links */}
                              <Col lg="3" md={6} sm={12} className="p-5 text-center">
                                   <h2 className="footerName text-center">Follow Us</h2>
                                   <div className="social-container">
                                        <a className="facebook social" href={this.state.facebook} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faFacebook} size="2x" />
                                        </a>
                                        <a href={this.state.youtube} className="youtube social" target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faYoutube} size="2x" />
                                        </a>
                                        <a href={this.state.twitter} className="twitter social" target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
                                   </div>
                              </Col>

                              {/* Address & Contact Info */}
                              <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                                   <h2 className="footerName">Address</h2>
                                   <p className="footerDescription">
                                        {this.state.address} <br />
                                        <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}<br />
                                        <FontAwesomeIcon icon={faPhone} /> Phone: {this.state.phone}<br />
                                   </p>
                              </Col>

                              {/* Information Links */}
                              <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                                   <h2 className="footerName">Information</h2>
                                   <Link className="footerLink" to="/about">About Me</Link> <br />
                                   <Link className="footerLink" to="/about">Company Profile</Link> <br />
                                   <Link className="footerLink" to="/contact">Contact Us</Link> <br />
                              </Col>

                              {/* Policy Links */}
                              <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                                   <h2 className="footerName">Policy</h2>
                                   <Link className="footerLink" to="/refund">Refund Policy</Link> <br />
                                   <Link className="footerLink" to="/trems">Terms And Condition</Link> <br /> {/* Corrected typo */}
                                   <Link className="footerLink" to="/privacy">Privacy And Policy</Link> <br />
                              </Col>
                         </Row>
                    </Container>

                    {/* Copyright section */}
                    <Container fluid={true} className="text-center copyrightSection">
                         <a className="copyrightlink" href="#" target="_blank" rel="noopener noreferrer"> {/* Added target/rel for external links */}
                              {this.state.footer_credit}
                         </a>
                    </Container>
               </Fragment>
          );
     }
}

export default Footer;