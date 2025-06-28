import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TremsDescription extends Component {
  render() {
    return (
      <Fragment>
        {/* Main container for Terms and Conditions content */}
        <Container>
          <Row>
            {/* Full-width column for all text content */}
            <Col lg={12} md={12} sm={12}>
              
              {/* Section heading */}
              <h1 className="serviceName">Terms And Conditions</h1>
              <hr />

              {/* Main paragraph content */}
              <p className="serviceDescription">
                
                {/* Comments section */}
                <b>Comments</b> <br />
                When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help with spam detection.
                <br /><br />

                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to check if you are using it. The Gravatar service privacy policy is available here: 
                <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer"> https://automattic.com/privacy/</a>. 
                After approval of your comment, your profile picture is visible to the public in the context of your comment.
                <br /><br />

                {/* Media section */}
                <b>Media</b> <br />
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS). Visitors can download and extract location data from images on the site.
                <br /><br />

                {/* Contact forms section */}
                <b>Contact forms</b> <br />
                We may use the information submitted through contact forms to communicate with you. This information is not used for marketing purposes.
                <br /><br />

                {/* Embedded content section */}
                <b>Embedded content from other websites</b> <br />
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves the same way as if the visitor has visited the original website directly.
                <br /><br />

                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with the embedded content—especially if you are logged in to that website.
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default TremsDescription
