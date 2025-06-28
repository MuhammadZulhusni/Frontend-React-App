import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectDetails from '../../asset/image/pdetails.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../../asset/css/custom.css';

class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="project-container">
          <Row className="align-items-center">
            {/* Left image column */}
            <Col lg={6} md={6} sm={12} className="text-center mb-4 mb-md-0">
              <div className="project-image-wrapper">
                <img className="img-fluid rounded shadow" src={projectDetails} alt="Project details" />
              </div>
            </Col>

            {/* Right content column */}
            <Col lg={6} md={6} sm={12}>
              <div className="project-content">
                <h2 className="project-title">
                  Education in continuing a proud tradition.
                </h2>
                <p className="project-description">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph.
                </p>

                {/* Bullet points */}
                <ul className="project-checklist">
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Requirement Gathering</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Metus interdum metus</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Ligula cur maecenas</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Responsive Implementation</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Cross-browser Testing</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Final Deployment</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;
