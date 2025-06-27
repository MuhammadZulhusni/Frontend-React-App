// Import required libraries and components
import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faLaptop,
  faStar,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup'; // For animated counting effect

class Summary extends Component {
  render() {
    return (
      <Fragment>
        {/* Main background container with full width */}
        <Container fluid className="summaryBanner p-0 position-relative">

          {/* Dark overlay with centered content using flex */}
          <div className="summaryBannerOverlay d-flex align-items-center">

            {/* Inner content container, centered text */}
            <Container className="text-center">
              <Row>

                {/* Left side: count up stats */}
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    {/* Students Worldwide */}
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                      <h1 className="countNumber">
                        <CountUp 
                          end={35000}        // End value
                          duration={3}       // How long it takes
                          enableScrollSpy    // Start animation when visible
                          scrollSpyDelay={200} // Delay before counting
                        />
                      </h1>
                      <h4 className="countTitle">Students Worldwide</h4>
                      <hr className="bg-white w-25 mx-auto" />
                    </Col>

                    {/* Courses Published */}
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                      <h1 className="countNumber">
                        <CountUp end={22} duration={2} enableScrollSpy scrollSpyDelay={200} />
                      </h1>
                      <h4 className="countTitle">Courses Published</h4>
                      <hr className="bg-white w-25 mx-auto" />
                    </Col>

                    {/* Student Reviews */}
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faStar} />
                      <h1 className="countNumber">
                        <CountUp end={3000} duration={2.5} enableScrollSpy scrollSpyDelay={200} />
                      </h1>
                      <h4 className="countTitle">Student Reviews</h4>
                      <hr className="bg-white w-25 mx-auto" />
                    </Col>
                  </Row>
                </Col>

                {/* Right side: Achievement list in a card */}
                <Col lg={4} md={6} sm={12} className="mt-4 mt-lg-0">
                  <Card className="workCard shadow bg-white">
                    <Card.Body>
                      {/* Card title */}
                      <Card.Title className="cardTitle">What I Have Achieved</Card.Title>

                      {/* Bullet list of achievements */}
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
