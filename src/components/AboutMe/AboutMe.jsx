import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png';
import { init } from 'ityped'

class AboutMe extends Component {

  // This lifecycle method runs after the component is mounted to the DOM
  componentDidMount() {
    // Select the span element where the text animation will appear
    const myElement = document.querySelector('#myElement')

    // Initialize the ityped animation with options
    init(myElement, {
      showCursor: false,
      strings: ['Web Developer!', 'Online Instructor!']
    })
  }

  render() {
    return (
      <Fragment>
        {/* Bootstrap container to center the content */}
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="bottom"></div>

          <Row>
            {/* Left column for image */}
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeImage">
                {/* Added alt attribute to fix ESLint warning */}
                <img className="aboutImg" src={face} alt="Profile" />
              </div>
            </Col>

            {/* Right column for text content */}
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">HI There, I'm</h2>
                <h2 className="aboutMeTitle">Kazi Ariyan</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElement"> </span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutMe
