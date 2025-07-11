import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';
import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className="intro-area--top">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="section-title text-center">
                  <div className="intro-area-inner">

                    {/* Welcome Title */}
                    <Fade direction="down" triggerOnce>
                      <h6 className="sub-title double-line">WELCOME</h6>
                    </Fade>

                    <Zoom triggerOnce>
                      <h2 className="maintitle">
                        An exemplary<br />
                        learning community
                      </h2>
                    </Zoom>

                    {/* Top Boxes */}
                    <Container className="text-center mt-5">
                      <Fade direction="up" triggerOnce>
                        <Row>
                          <Col lg={4} md={6} sm={12}>
                            <img src={pageone} alt="Easy as it gets" />
                            <h1 className="serviceName">Easy As it Gets</h1>
                            <p className="serviceDescription">Lorem ipsum dolor</p>
                          </Col>
                          <Col lg={4} md={6} sm={12}>
                            <img src={pagetwo} alt="Teach your way" />
                            <h1 className="serviceName">Teach The Way You Want</h1>
                            <p className="serviceDescription">Lorem ipsum dolor</p>
                          </Col>
                          <Col lg={4} md={6} sm={12}>
                            <img src={pagethree} alt="The small matter" />
                            <h1 className="serviceName">The Small Matter</h1>
                            <p className="serviceDescription">Lorem ipsum dolor</p>
                          </Col>
                        </Row>
                      </Fade>

                      {/* Bottom Features */}
                      <Slide direction="up" triggerOnce>
                        <Row className="intro-footer bg-base text-center mt-5">
                          <Col lg={4} md={6} sm={12}>
                            <Row>
                              <Col lg={6}>
                                <img className="sideImg" src={imgone} alt="Development" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Development</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={4} md={6} sm={12}>
                            <Row>
                              <Col lg={6}>
                                <img className="sideImg" src={imgtwo} alt="Web Design" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Web Design</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={4} md={6} sm={12}>
                            <Row>
                              <Col lg={6}>
                                <img className="sideImg" src={imgthree} alt="Ecommerce" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Ecommerce</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Slide>
                    </Container>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Welcome;
