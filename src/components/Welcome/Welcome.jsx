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
                        Powerful REST APIs<br />
                        built for developers
                      </h2>
                    </Zoom>

                    {/* Top Boxes */}
                    <Container className="text-center mt-5">
                      <Fade direction="up" triggerOnce>
                        <Row>
                          <Col lg={4} md={6} sm={12}>
                            {/* Applied fixed-size-icon class */}
                            <img src={pageone} alt="Simple Integration" className="fixed-size-icon" />
                            <h1 className="serviceName">Simple Integration</h1>
                            <p className="serviceDescription">Get up and running in minutes with our comprehensive documentation and code examples</p>
                          </Col>
                          <Col lg={4} md={6} sm={12}>
                            {/* Applied fixed-size-icon class */}
                            <img src={pagetwo} alt="Flexible Architecture" className="fixed-size-icon" />
                            <h1 className="serviceName">Flexible Architecture</h1>
                            <p className="serviceDescription">RESTful design principles with JSON responses that adapt to your workflow</p>
                          </Col>
                          <Col lg={4} md={6} sm={12}>
                            {/* Applied fixed-size-icon class */}
                            <img src={pagethree} alt="Enterprise Ready" className="fixed-size-icon" />
                            <h1 className="serviceName">Enterprise Ready</h1>
                            <p className="serviceDescription">Secure, scalable, and reliable APIs with 99.9% uptime guarantee</p>
                          </Col>
                        </Row>
                      </Fade>

                      {/* Bottom Features */}
                      <Slide direction="up" triggerOnce>
                        <Row className="intro-footer bg-base text-center mt-5">
                          <Col lg={4} md={6} sm={12}>
                            <Row className="align-items-center"> {/* Added align-items-center for vertical alignment */}
                              <Col lg={6}>
                                {/* Applied fixed-size-side-img class */}
                                <img className="sideImg fixed-size-side-img" src={imgone} alt="Authentication" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Authentication</h5>
                                <p className="text-justify serviceDescription">Secure OAuth 2.0 and API key authentication with role-based access control</p>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={4} md={6} sm={12}>
                            <Row className="align-items-center"> {/* Added align-items-center for vertical alignment */}
                              <Col lg={6}>
                                {/* Applied fixed-size-side-img class */}
                                <img className="sideImg fixed-size-side-img" src={imgtwo} alt="Real-time Data" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Real-time Data</h5>
                                <p className="text-justify serviceDescription">WebSocket support and webhook notifications for instant data synchronization</p>
                              </Col>
                            </Row>
                          </Col>

                          <Col lg={4} md={6} sm={12}>
                            <Row className="align-items-center"> {/* Added align-items-center for vertical alignment */}
                              <Col lg={6}>
                                {/* Applied fixed-size-side-img class */}
                                <img className="sideImg fixed-size-side-img" src={imgthree} alt="Rate Limiting" />
                              </Col>
                              <Col lg={6}>
                                <h5 className="text-justify homeIntro">Rate Limiting</h5>
                                <p className="text-justify serviceDescription">Smart throttling and caching mechanisms to optimize performance</p>
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

