import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import face from '../../asset/image/face.png';
import { init } from 'ityped';
import Loading from '../Loading/Loading'; // Import the Loading component
import { Fade } from 'react-awesome-reveal'; // Import Fade animation

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      loaderClass: "text-center",
      mainDivClass: "d-none"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const myElement = document.querySelector('#myElement');
      if (myElement) {
        init(myElement, {
          showCursor: false,
          strings: ['Web Developer!', 'Online Instructor!']
        });
      }

      this.setState({
        loaderClass: "d-none",
        mainDivClass: "text-center"
      });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Fade triggerOnce direction="up">
            <h1 className="serviceMainTitle">ABOUT ME</h1>
            <div className="bottom"></div>
          </Fade>

          <Row>
            <Col className={this.state.loaderClass}>
              <Loading />
            </Col>

            <Col lg={6} md={6} sm={12} className={this.state.mainDivClass}>
              <div className="aboutMeImage">
                <img className="aboutImg" src={face} alt="Profile" />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className={this.state.mainDivClass}>
              <Fade triggerOnce direction="right">
                <div className="aboutMeBody">
                  <h2 className="aboutMeDetails">HI There, I'm</h2>
                  <h2 className="aboutMeTitle">Kazi Ariyan</h2>
                  <h3 className="aboutMeDetails">
                    Work as <span id="myElement"> </span>
                  </h3>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
