import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

// Importing brand icons from Font Awesome
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// Importing solid icons from Font Awesome
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        {/* Footer Section */}
        <Container fluid={true} className="footerSection">
          <Row>
            {/* Social Media Links */}
            <Col lg="3" md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us</h2>

              <div className="social-container">
                {/* Facebook Icon */}
                <a className="facebook social" href="#">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                {/* YouTube Icon */}
                <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>

                {/* Twitter Icon */}
                <a href="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>

            {/* Address Section */}
            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Address</h2>
              <p className="footerDescription">
                6522 Baltimore National Pike CatonsVille, California, USA <br />
                <FontAwesomeIcon icon={faEnvelope} /> Email: Support@ele.com<br />
                <FontAwesomeIcon icon={faPhone} /> Phone: 434343434<br />
              </p>
            </Col>

            {/* Information Links */}
            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information</h2>
              <a className="footerLink" href="#">About Me</a> <br />
              <a className="footerLink" href="#">Company Profile</a> <br />
              <a className="footerLink" href="#">Contact Us</a> <br />
            </Col>

            {/* Policy Links */}
            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Policy</h2>
              <Link className="footerLink" to="/refund">Refund Policy</Link> <br></br>
              <a className="footerLink" href="#">Terms and Conditions</a> <br />
              <a className="footerLink" href="#">Privacy Policy</a> <br />
            </Col>
          </Row>
        </Container>

        {/* Copyright Section */}
        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightlink" href="#">
            © Copyright 2016 by Easy Learning, All Rights Reserved
          </a>
        </Container>
      </Fragment>
    )
  }
}

export default Footer
