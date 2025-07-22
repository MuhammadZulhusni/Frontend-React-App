import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import '../../asset/css/allCourses.css';

class AllCourses extends Component {
  state = {
    courses: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = async () => {
    try {
      const result = await RestClient.GetRequest(AppUrl.CourseAll);
      this.setState({
        courses: result || [],
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      this.setState({
        loading: false,
        error: 'Failed to load courses. Please try again later.',
      });
    }
  };

  getImageUrl = (originalUrl) => {
    const productionBackendUrl = 'https://rapi.get-virtual-admin.com';

    if (originalUrl?.startsWith('/')) {
      // If image URL is relative (e.g. "/storage/small_img.jpg")
      return `${productionBackendUrl}${originalUrl}`;
    }

    // Otherwise, return as is (or add more conditions if needed)
    return originalUrl;
  };

  renderCourseCard = (course) => {
    const imageUrl = this.getImageUrl(course.small_img);
    const courseSlug = encodeURIComponent(
      course.short_title.replace(/\s+/g, '-').toLowerCase()
    );

    return (
      <Col lg={6} md={12} sm={12} key={course.id} className="mb-5">
        <Fade direction="up" triggerOnce>
          <div className="course-card shadow-sm">
            <Row className="g-0">
              <Col lg={6} md={6} sm={12}>
                <div className="course-image-container">
                  <img
                    className="course-image"
                    src={imageUrl}
                    alt={course.short_title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400?text=Course+Image";
                    }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} className="p-4">
                <div className="course-content">
                  <h5 className="course-title">{course.short_title}</h5>
                  <p className="course-description">{course.short_description}</p>
                  <Link
                    to={`/coursedetails/${course.id}/${courseSlug}`}
                    className="course-details-link"
                    aria-label={`View details for ${course.short_title}`}
                  >
                    View Details <span className="arrow">→</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Fade>
      </Col>
    );
  };

  render() {
    const { loading, error, courses } = this.state;

    if (loading) return <Loading />;

    if (error) {
      return (
        <Container className="error-container py-5">
          <div className="text-center">
            <Fade triggerOnce>
              <div className="error-message">
                <p className="text-danger mb-4">{error}</p>
                <button
                  onClick={this.fetchCourses}
                  className="retry-button"
                >
                  Retry
                </button>
              </div>
            </Fade>
          </div>
        </Container>
      );
    }

    return (
      <section className="all-courses-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <Fade triggerOnce>
              <h1 className="section-title">My Courses</h1>
              <div className="title-divider"></div>
              <p className="section-subtitle">Explore all available courses</p>
            </Fade>
          </div>

          <Row className="g-4">
            {courses.length > 0 ? (
              courses.map(this.renderCourseCard)
            ) : (
              <Col className="text-center py-5">
                <p className="text-muted">No courses available at the moment.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    );
  }
}

export default AllCourses;
