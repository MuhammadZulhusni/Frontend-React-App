import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faLaptop,
  faStar,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { Fade, Slide } from 'react-awesome-reveal';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summaryBanner p-0 position-relative">
          <div className="summaryBannerOverlay d-flex align-items-center">
            <Container className="text-center">
              <Row>
                {/* Left: Stats Section */}
                <Col lg={8} md={6} sm={12}>
                  <Fade direction="up" triggerOnce>
                    <Row className="countSection">
                      <Col>
                        <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                        <h1 className="countNumber">
                          <CountUp
                            end={35000}
                            duration={3}
                            enableScrollSpy
                            scrollSpyDelay={200}
                          />
                        </h1>
                        <h4 className="countTitle">Students Worldwide</h4>
                        <hr className="bg-white w-25 mx-auto" />
                      </Col>

                      <Col>
                        <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                        <h1 className="countNumber">
                          <CountUp
                            end={22}
                            duration={2}
                            enableScrollSpy
                            scrollSpyDelay={200}
                          />
                        </h1>
                        <h4 className="countTitle">Courses Published</h4>
                        <hr className="bg-white w-25 mx-auto" />
                      </Col>

                      <Col>
                        <FontAwesomeIcon className="iconProject" icon={faStar} />
                        <h1 className="countNumber">
                          <CountUp
                            end={3000}
                            duration={2.5}
                            enableScrollSpy
                            scrollSpyDelay={200}
                          />
                        </h1>
                        <h4 className="countTitle">Student Reviews</h4>
                        <hr className="bg-white w-25 mx-auto" />
                      </Col>
                    </Row>
                  </Fade>
                </Col>

                {/* Right: Achievements Card */}
                <Col lg={4} md={6} sm={12} className="mt-4 mt-lg-0">
                  <Slide direction="right" triggerOnce>
                    <Card className="workCard shadow bg-white">
                      <Card.Body>
                        <Card.Title className="cardTitle">What I Have Achieved</Card.Title>
                        <Card.Text>
                          <p className="cardSubTitle text-justify">
                            <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirement Gathering
                          </p>
                          <p className="cardSubTitle text-justify">
                            <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> System Analysis
                          </p>
                          <p className="cardSubTitle text-justify">
                            <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Coding & Testing
                          </p>
                          <p className="cardSubTitle text-justify">
                            <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Implementation
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Slide>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
