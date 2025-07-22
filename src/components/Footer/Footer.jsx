import React, { Component, Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"; 


const Loading = () => (
    <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
        Loading footer content...
    </div>
);

const RestClient = {
    GetRequest: (url) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                    address: "Residensi Pudu Alam Rekreasi, 5, Jalan Pudu Perdana, Taman Pertama, 56100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
                    email: "mzulhusni2003@gmail.com",
                    phone: "+60182400849",
                    facebook: "https://facebook.com/",
                    youtube: "https://youtube.com/",
                    twitter: "https://twitter.com/",
                    footer_credit: "© 2025 Zulhusni. All Rights Reserved."
                }]);
            }, 1000);
        });
    }
};

const AppUrl = {
    FooterData: '/api/footer-data'
};


class Footer extends Component {
     constructor() {
          super();
          this.state = {
               address: "...",
               email: "...",
               phone: "...",
               facebook: "...",
               youtube: "...",
               twitter: "...",
               footer_credit: "...",
               loading: true,
               error: false
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.FooterData)
               .then(result => {
                    this.setState({
                         address: result[0]['address'],
                         email: result[0]['email'],
                         phone: result[0]['phone'],
                         facebook: result[0]['facebook'],
                         youtube: result[0]['youtube'],
                         twitter: result[0]['twitter'],
                         footer_credit: result[0]['footer_credit'],
                         loading: false,
                         error: false
                    });
               })
               .catch(error => {
                    console.error("Error fetching footer data:", error);
                    this.setState({
                         loading: false,
                         error: true
                    });
               });
     }

     render() {
          if (this.state.loading === true) {
               return <Loading />;
          }

          if (this.state.error === true) {
               return (
                    <Container fluid={true} className="footer-section error-state py-5">
                         <p className="text-danger lead">Failed to load footer content. Please try again later.</p>
                    </Container>
               );
          }

          return (
               <Fragment>
                    <Container fluid={true} className="footer-section">
                         <Row className="justify-content-center">
                              <Col lg="3" md={6} sm={12} className="footer-col text-center">
                                   <h2 className="footer-heading">Follow Us</h2>
                                   <div className="social-links-container">
                                        <a className="social-icon-link" href={this.state.facebook} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                        </a>
                                        <a className="social-icon-link" href={this.state.youtube} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                                        </a>
                                        <a className="social-icon-link" href={this.state.twitter} target="_blank" rel="noopener noreferrer">
                                             <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                        </a>
                                   </div>
                              </Col>

                              <Col lg="3" md={6} sm={12} className="footer-col">
                                   <h2 className="footer-heading">Address</h2>
                                   <p className="footer-text">
                                        {this.state.address} <br />
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {this.state.email}<br />
                                        <FontAwesomeIcon icon={faPhone} className="me-2" /> {this.state.phone}<br />
                                   </p>
                              </Col>

                              <Col lg="3" md={6} sm={12} className="footer-col">
                                   <h2 className="footer-heading">Information</h2>
                                   <ul className="footer-links-list">
                                        <li><Link className="footer-link-item" to="/about">About Me</Link></li>
                                        <li><Link className="footer-link-item" to="/about">Company Profile</Link></li>
                                        <li><Link className="footer-link-item" to="/contact">Contact Us</Link></li>
                                   </ul>
                              </Col>

                              <Col lg="3" md={6} sm={12} className="footer-col">
                                   <h2 className="footer-heading">Policy</h2>
                                   <ul className="footer-links-list">
                                        <li><Link className="footer-link-item" to="/refund">Refund Policy</Link></li>
                                        <li><Link className="footer-link-item" to="/trems">Terms And Condition</Link></li>
                                        <li><Link className="footer-link-item" to="/privacy">Privacy And Policy</Link></li>
                                   </ul>
                              </Col>
                         </Row>
                         <Row>
                             <Col lg={12} className="text-center py-3">
                                 <p className="footer-credit">{this.state.footer_credit}</p>
                             </Col>
                         </Row>
                    </Container>
               </Fragment>
          );
     }
}

export default Footer;
