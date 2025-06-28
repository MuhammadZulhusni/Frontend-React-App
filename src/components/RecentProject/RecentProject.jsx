import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'

class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        {/* Main container with centered text */}
        <Container className="text-center">
          
          {/* Section title */}
          <h1 className="serviceMainTitle">RECENT PROJECTS</h1>

          {/* Bottom divider line (styling element) */}
          <div className="bottom"></div>

          {/* Project cards row - centered horizontally */}
          <Row className="justify-content-center">

            {/* === Project Card 1 === */}
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard mx-auto">
                
                {/* Project image */}
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg"
                  alt="Project One"
                />
                
                {/* Project details */}
                <Card.Body>
                  <Card.Title className="serviceName">Project Name One</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  
                  {/* Project link button */}
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* === Project Card 2 === */}
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard mx-auto">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg"
                  alt="Project Two"
                />
                <Card.Body>
                  <Card.Title className="serviceName">Project Name Two</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* === Project Card 3 === */}
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard mx-auto">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                  alt="Project Three"
                />
                <Card.Body>
                  <Card.Title className="serviceName">Project Name Three</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
