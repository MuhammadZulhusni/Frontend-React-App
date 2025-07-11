import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import face from '../../asset/image/face.png';
import { init } from 'ityped';
import Loading from '../Loading/Loading'; // Import the Loading component

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      // Manage loading state for initial content display
      loaderClass: "text-center", // Initially show loader (centered)
      mainDivClass: "d-none"      // Initially hide main content
    };
  }

  // This lifecycle method runs after the component is mounted to the DOM
  componentDidMount() {
    // Simulate a brief loading period, then show content and start ityped animation
    // You can remove or adjust the setTimeout if you fetch data from an API here
    setTimeout(() => {
      const myElement = document.querySelector('#myElement');

      // Initialize the ityped animation with options
      if (myElement) { // Ensure element exists before initializing ityped
        init(myElement, {
          showCursor: false,
          strings: ['Web Developer!', 'Online Instructor!']
        });
      }

      // After "loading" (or data fetch), hide loader and show main content
      this.setState({
        loaderClass: "d-none",
        mainDivClass: "text-center" // Or whatever class makes your main content visible
      });
    }, 1000); // 1 second delay to show the loader
  }

  render() {
    return (
      <Fragment>
        {/* Bootstrap container to center the content */}
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="bottom"></div>

          <Row>
            {/* Column for the loading animation */}
            <Col className={this.state.loaderClass}>
              <Loading />
            </Col>

            {/* Main content columns, visibility controlled by mainDivClass */}
            <Col lg={6} md={6} sm={12} className={this.state.mainDivClass}>
              <div className="aboutMeImage">
                <img className="aboutImg" src={face} alt="Profile" />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className={this.state.mainDivClass}>
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
    );
  }
}

export default AboutMe;