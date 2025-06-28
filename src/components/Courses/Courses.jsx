import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom'

class Courses extends Component {
  render() {
    return (
      <Fragment>
        {/* Main container with center-aligned content */}
        <Container className="text-center">

          {/* Section title */}
          <h1 className="serviceMainTitle">MY COURSES</h1>

          {/* Decorative line below title */}
          <div className="bottom"></div>

          {/* Main row containing 2 columns (each column has 2 courses) */}
          <Row>
            
            {/* === Left column === */}
            <Col lg={6} md={12} sm={12}>
              <Row>
                {/* Course 1 - Image */}
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                    alt="Laravel course one"
                  />
                </Col>

                {/* Course 1 - Info */}
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>

                {/* Course 2 - Image */}
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                    alt="Laravel course two"
                  />
                </Col>

                {/* Course 2 - Info */}
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>
            </Col>

            {/* === Right column === */}
            <Col lg={6} md={12} sm={12}>
              <Row>
                {/* Course 3 - Image */}
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg"
                    alt="Laravel course three"
                  />
                </Col>

                {/* Course 3 - Info */}
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>

                {/* Course 4 - Image */}
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg"
                    alt="Laravel course four"
                  />
                </Col>

                {/* Course 4 - Info */}
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
