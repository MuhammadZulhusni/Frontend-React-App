import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Images for the top intro boxes
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';

// Images for the bottom feature section
import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        {/* Top intro section with welcome message */}
        <div className="intro-area--top">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                {/* Section title and main heading */}
                <div className="section-title text-center">
                  <div className="intro-area-inner">
                    <h6 className="sub-title double-line">WELCOME</h6>
                    <h2 className="maintitle">
                      An exemplary<br />
                      learning community
                    </h2>

                    {/* Three-column section below title */}
                    <Container className="text-center mt-5">
                      <Row>
                        {/* Box 1 */}
                        <Col lg={4} md={6} sm={12}>
                          <img src={pageone} alt="Easy as it gets" />
                          <h1 className="serviceName">Easy As it Gets</h1>
                          <p className="serviceDescription">Lorem ipsum dolor</p>
                        </Col>

                        {/* Box 2 */}
                        <Col lg={4} md={6} sm={12}>
                          <img src={pagetwo} alt="Teach your way" />
                          <h1 className="serviceName">Teach The Way You Want</h1>
                          <p className="serviceDescription">Lorem ipsum dolor</p>
                        </Col>

                        {/* Box 3 */}
                        <Col lg={4} md={6} sm={12}>
                          <img src={pagethree} alt="The small matter" />
                          <h1 className="serviceName">The Small Matter</h1>
                          <p className="serviceDescription">Lorem ipsum dolor</p>
                        </Col>
                      </Row>

                      {/* Intro footer with three feature blocks */}
                      <Row className="intro-footer bg-base text-center mt-5">

                        {/* Feature 1: Development */}
                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img className="sideImg" src={imgone} alt="Development" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify homeIntro">Development</h5>
                              <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                          </Row>
                        </Col>

                        {/* Feature 2: Web Design */}
                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img className="sideImg" src={imgtwo} alt="Web Design" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify homeIntro">Web Design</h5>
                              <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                          </Row>
                        </Col>

                        {/* Feature 3: Ecommerce */}
                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img className="sideImg" src={imgthree} alt="Ecommerce" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify homeIntro">Ecommerce</h5>
                              <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                          </Row>
                        </Col>

                      </Row>
                    </Container>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome
