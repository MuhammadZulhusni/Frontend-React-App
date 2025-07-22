import React, { Component, Fragment, memo } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import '../../asset/css/recentProject.css'; 

const ProjectCard = memo(({ project }) => (
  <Card className="project-card h-100">
    <div className="project-image-container">
      <img
        src={project.img_one}
        alt={project.project_name}
        className="project-image"
        loading="lazy"
        decoding="async"
      />
      <div className="project-overlay">
        <span className="project-overlay-icon">👁</span>
      </div>
    </div>

    <Card.Body className="d-flex flex-column">
      <Card.Title className="project-title">
        {project.project_name}
      </Card.Title>

      <Card.Text className="project-description flex-grow-1">
        {project.project_description}
      </Card.Text>

      <div className="project-actions mt-auto">
        <Link
          className="project-btn"
          to={`/projectdetails/${project.id}/${project.project_name}`}
        >
          → View Details
        </Link>
      </div>
    </Card.Body>
  </Card>
));

const SkeletonProjectCard = memo(() => (
  <Card className="project-card h-100 loading">
    <div className="project-image-container shimmer-bg"></div>

    <Card.Body className="d-flex flex-column">
      <div className="shimmer-line short"></div>
      <div className="shimmer-line long flex-grow-1"></div>
      <div className="shimmer-line button"></div>
    </Card.Body>
  </Card>
));

class RecentProject extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectHome)
      .then(result => {
        this.setState({ myData: result, loading: false });
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { myData, loading, error } = this.state;

    const renderProjectContent = () => {
      if (loading) {
        return [...Array(3)].map((_, index) => (
          <Col lg={4} md={6} sm={12} key={`skeleton-${index}`} className="mb-4">
            <SkeletonProjectCard />
          </Col>
        ));
      } else if (error) {
        return (
          <Col xs={12}>
            <div className="no-projects text-center py-5">
              <span className="no-projects-icon text-danger">⚠️</span>
              <h4 className="text-danger">Failed to load projects</h4>
              <p className="text-muted">Please try again later or check your internet connection.</p>
            </div>
          </Col>
        );
      } else if (myData.length > 0) {
        return myData.map(project => (
          <Col lg={4} md={6} sm={12} key={project.id} className="mb-4">
            <ProjectCard project={project} />
          </Col>
        ));
      } else {
        return (
          <Col xs={12}>
            <div className="no-projects text-center py-5">
              <span className="no-projects-icon">📁</span>
              <h4 className="text-muted">No projects available</h4>
              <p className="text-muted">Check back later for new projects!</p>
            </div>
          </Col>
        );
      }
    };

    return (
      <Fragment>
        <section className="recent-projects-section py-5">
          <Container>
            <div className="text-center mb-5">
              <div className="section-header">
                <h1 className="section-title">Recent Projects</h1>
                <div className="title-underline"></div>
                <p className="section-subtitle">
                  Explore our latest work and creative solutions
                </p>
              </div>
            </div>

            <Row className="g-4">
              {renderProjectContent()}
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default RecentProject;
