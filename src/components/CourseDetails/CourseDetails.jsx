import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faUser, faClock, faClipboard, faClone, faTags } from '@fortawesome/free-solid-svg-icons';

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {/* Left column: Course description */}
            <Col lg={8} md={6} sm={12}>
              <h1 className="courseDetailsTitle">
                Aenean sed nibh a magna posuere tempo faucib
              </h1>

              {/* Course image */}
              <img
                className="courseDetailsImg mb-4"
                src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png"
                alt="Course"
              />

              {/* Course description */}
              <p className="courseDescription">
                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog...
                <br /><br />
                Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex...
                <br /><br />
                Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls...
              </p>
            </Col>

            {/* Right column: Sidebar with course features */}
            <Col lg={4} md={6} sm={12}>
              <div className="widgetFeature shadow-sm rounded">
                <h4 className="widgetTitle text-center">Course Features</h4>
                <hr />
                <ul className="featureList">
                  <li><FontAwesomeIcon className="iconBullet" icon={faUser} /> <span>Enrolled:</span> 1200 students</li>
                  <li><FontAwesomeIcon className="iconBullet" icon={faClock} /> <span>Duration:</span> 2 hours</li>
                  <li><FontAwesomeIcon className="iconBullet" icon={faClipboard} /> <span>Lectures:</span> 8</li>
                  <li><FontAwesomeIcon className="iconBullet" icon={faClone} /> <span>Categories:</span> Technology</li>
                  <li><FontAwesomeIcon className="iconBullet" icon={faTags} /> <span>Tags:</span> Android, JavaScript</li>
                  <li><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> <span>Instructor:</span> Kazi Ariyan</li>
                </ul>

                {/* Price and enroll button */}
                <div className="priceWrap text-center">
                  <h5>Price: <span>$54.00</span></h5>
                  <Button variant="warning" className="mt-3">ENROLL COURSE</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
