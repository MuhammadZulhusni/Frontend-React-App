import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        {/* Main container with top margin */}
        <Container className="mt-5">
          <Row>
            {/* Full-width column for all content */}
            <Col lg={12} md={12} sm={12}>
              
              {/* Section title */}
              <h1 className="serviceName">Data Protection Principles</h1>
              <hr />

              {/* Main description content */}
              <p className="serviceDescription">
                
                {/* Unordered list for key protection principles */}
                <ul>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                  <li>
                    Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.
                  </li>
                </ul>

                {/* Comments policy */}
                <b>Comments</b> <br />
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                <br /><br />
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: 
                <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer"> https://automattic.com/privacy/</a>. 
                After approval of your comment, your profile picture is visible to the public in the context of your comment.
                <br /><br />

                {/* Media upload notice */}
                <b>Media</b> <br />
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                <br /><br />

                {/* Contact form policy */}
                <b>Contact forms</b> <br />
                We may use contact form submission information to get in touch with you. We do not use the information submitted through contact form for marketing purposes.
                <br /><br />

                {/* Embedded content warning */}
                <b>Embedded content from other websites</b> <br />
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                <br /><br />
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.

              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundDescription
