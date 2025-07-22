import React, { Component } from 'react';
import { Col, Container, Row, Button, Image, ListGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckSquare, 
  faUser, 
  faClock, 
  faClipboard, 
  faLayerGroup, 
  faTag,
  faChalkboardTeacher,
  faPlay,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import '../../asset/css/courseDetails.css';

class CourseDetails extends Component {
  render() {
    const courseDetailsArray = this.props.courseallData || [];
    
    // Default values object
    const defaultValues = {
      longTitle: "Course Title Not Found",
      longDescription: "No description available for this course.",
      totalDuration: "N/A",
      totalLecture: "N/A",
      totalStudent: "N/A",
      skillAll: "No specific skills listed.",
      videoUrl: "",
      smallImg: "https://placehold.co/800x450?text=Course+Image"
    };

    // Get course data or use defaults
    const course = courseDetailsArray[0] || {};
    const {
      long_title = defaultValues.longTitle,
      long_description = defaultValues.longDescription,
      total_duration = defaultValues.totalDuration,
      total_lecture = defaultValues.totalLecture,
      total_student = defaultValues.totalStudent,
      skill_all = defaultValues.skillAll,
      small_img = defaultValues.smallImg,
      video_url = defaultValues.videoUrl
    } = course;

    const courseFeatures = [
      { icon: faUser, label: "Enrolled", value: `${total_student} students` },
      { icon: faClock, label: "Duration", value: `${total_duration} hours` },
      { icon: faClipboard, label: "Lectures", value: total_lecture },
      { icon: faLayerGroup, label: "Categories", value: "Technology, Development" },
      { icon: faTag, label: "Tags", value: "Android, JavaScript, React, Laravel" },
      { icon: faChalkboardTeacher, label: "Instructor", value: "Zulhusni" }
    ];

    // Inline styles for preview section
    const previewCardStyle = {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '15px',
      overflow: 'hidden',
      minHeight: '300px',
      cursor: video_url ? 'pointer' : 'default',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    };

    const previewContentStyle = {
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(102, 126, 234, 0.4))',
      minHeight: '300px',
      cursor: video_url ? 'pointer' : 'default',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    };

    const playIconStyle = {
      fontSize: '4rem',
      color: 'white',
      opacity: '0.9'
    };

    const handlePreviewClick = () => {
      if (video_url) {
        window.open(video_url, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <div className="course-details-page">
        {/* Course Header Section */}
        <section className="course-header py-5">
          <Container>
            <Row className="g-4">
              <Col lg={8}>
                <div className="course-main-content">
                  <h1 className="course-title">{long_title}</h1>
                  <div className="course-image-container mb-4">
                    <Image 
                      src={small_img} 
                      alt={long_title} 
                      className="course-main-image"
                      fluid
                    />
                  </div>
                  <div className="course-description">
                    {parse(long_description)}
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <Card className="course-features-card shadow-lg">
                  <Card.Body>
                    <h2 className="features-title">Course Features</h2>
                    <div className="divider"></div>
                    
                    <ListGroup variant="flush" className="features-list">
                      {courseFeatures.map((feature, index) => (
                        <ListGroup.Item key={index} className="feature-item">
                          <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                          <span className="feature-label">{feature.label}:</span>
                          <span className="feature-value">{feature.value}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    <div className="price-section text-center mt-4">
                      <h3 className="price-text">
                        Price: <span className="price-amount">$54.00</span>
                      </h3>
                      <Button variant="primary" className="enroll-btn w-100 mt-3">
                        ENROLL NOW
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Course Skills & Preview Section */}
        <section className="course-skills-video py-5 bg-light">
          <Container>
            <Row className="g-4">
              <Col lg={6}>
                <Card className="skills-card shadow-sm">
                  <Card.Body>
                    <h2 className="skills-title">Skills You'll Gain</h2>
                    <div className="divider"></div>
                    <div className="skills-content">
                      {parse(skill_all)}
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                {/* Clickable Preview Card */}
                <div 
                  className="shadow-sm" 
                  style={previewCardStyle}
                  onClick={handlePreviewClick}
                  onMouseEnter={(e) => {
                    if (video_url) {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="p-4">
                    <h3 className="text-white mb-3 fw-bold d-flex align-items-center">
                      Course Preview 
                      {video_url && (
                        <FontAwesomeIcon 
                          icon={faExternalLinkAlt} 
                          className="ms-2" 
                          style={{ fontSize: '1.2rem' }}
                        />
                      )}
                    </h3>
                    
                    <div 
                      className="position-relative d-flex flex-column justify-content-center align-items-center rounded"
                      style={previewContentStyle}
                    >
                      {/* Preview Content Overlay */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          zIndex: 10
                        }}
                      >
                        <FontAwesomeIcon
                          icon={video_url ? faExternalLinkAlt : faPlay}
                          style={playIconStyle}
                          className="mb-3"
                        />
                        <h4 className="text-white fw-semibold mb-2">
                          {video_url ? 'Watch Preview' : 'Course Preview'}
                        </h4>
                        <p className="text-white-50 mb-0 text-center px-3">
                          {video_url 
                            ? 'Click to watch the course preview in a new tab'
                            : 'Preview not available at the moment'
                          }
                        </p>
                        {video_url && (
                          <small className="text-white-50 mt-2">
                            Opens in new tab
                          </small>
                        )}
                        {!video_url && (
                          <small className="text-white-50 mt-2">
                            Please check the video URL in the course data
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default CourseDetails;