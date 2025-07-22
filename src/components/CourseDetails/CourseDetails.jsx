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
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';
import { Player, BigPlayButton } from 'video-react';
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

    const videoUrl = video_url || "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

    const courseFeatures = [
      { icon: faUser, label: "Enrolled", value: `${total_student} students` },
      { icon: faClock, label: "Duration", value: `${total_duration} hours` },
      { icon: faClipboard, label: "Lectures", value: total_lecture },
      { icon: faLayerGroup, label: "Categories", value: "Technology" },
      { icon: faTag, label: "Tags", value: "Android, JavaScript" },
      { icon: faChalkboardTeacher, label: "Instructor", value: "Kazi Ariyan" }
    ];

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

        {/* Course Skills & Video Section */}
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
                <Card className="video-card shadow-sm">
                  <Card.Body className="p-0">
                    {videoUrl ? (
                      <div className="video-container">
                        <Player src={videoUrl} playsInline>
                          <BigPlayButton position="center" />
                        </Player>
                      </div>
                    ) : (
                      <div className="video-placeholder">
                        <p>Video Not Available</p>
                        <small>Please check the video URL in the course data.</small>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default CourseDetails;